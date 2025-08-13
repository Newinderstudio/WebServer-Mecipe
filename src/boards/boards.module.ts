import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { PrismaService } from 'src/global/prisma.service';

@Module({
  imports: [
    PrismaService
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
