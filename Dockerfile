FROM node:20-alpine AS builder

WORKDIR /app

# Alpine에서 Prisma 실행을 위한 OpenSSL 설치
RUN apk add --no-cache openssl1.1-compat

COPY package*.json ./
RUN npm ci

COPY . .

# Prisma Client 생성 (필수!)
RUN npx prisma generate

# NestJS 빌드
RUN npm run build

FROM node:20-alpine

# 프로덕션 이미지에도 OpenSSL 필요
RUN apk add --no-cache openssl1.1-compat

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# 환경변수 설정
ENV NODE_ENV=production

# 헬스체크 추가 (선택사항)
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:${PORT:-4000}/hello', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 시작 스크립트: 마이그레이션 실행 후 앱 시작
CMD sh -c "npx prisma migrate deploy && npm run start:prod"