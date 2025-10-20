FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# 환경변수 설정 (필요시)
# ENV NODE_ENV=production

# npm run start:prod로 실행
CMD ["npm", "run", "start:prod"]