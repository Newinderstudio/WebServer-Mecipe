import { Controller, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { RawimageuploadService } from './rawimageupload.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { AdminAuthGuard } from 'src/auth/jwt.guard.admin';

@Controller('rawimageupload')
export class RawimageuploadController {
  constructor(private readonly rawimageuploadService: RawimageuploadService) { }

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image' },
      { name: 'thumbnail' },
    ]),
  )
  @UseGuards(AdminAuthGuard)
  uploadImage(
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.rawimageuploadService.uploadImage(
      files['image'],
      files['thumbnail'] ?? undefined
    );
  }
}
