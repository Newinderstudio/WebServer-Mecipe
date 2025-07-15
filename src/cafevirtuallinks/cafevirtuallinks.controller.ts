import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CafevirtuallinksService } from './cafevirtuallinks.service';
import { CreateCafeVirtaulLinkWithImageDto, CreateCafevirtuallinkDto } from './dto/create-cafevirtuallink.dto';
import { UpdateCafeVirtaulLinkThumbnailImageDto, UpdateCafevirtuallinkDto } from './dto/update-cafevirtuallink.dto';
import { AdminAuthGuard } from 'src/auth/jwt.guard.admin';

@Controller('cafevirtuallinks')
export class CafevirtuallinksController {
  constructor(private readonly cafevirtuallinksService: CafevirtuallinksService) { }

  @Get('admin')
  @UseGuards(AdminAuthGuard)
  findAllCafeVirtualLinksByAdmin() {
    return this.cafevirtuallinksService.findAllCafeVirtualLinksByAdmin();
  }

  @Post('admin/create/:cafeId')
  @UseGuards(AdminAuthGuard)
  createCafeVirtualLinkByAdmin(@Param('cafeId') cafeId: string, @Body() createDto: CreateCafeVirtaulLinkWithImageDto) {
    return this.cafevirtuallinksService.createCafeVirtualLinkByAdmin(+cafeId, createDto);
  }

  @Patch('admin/update/:id')
  @UseGuards(AdminAuthGuard)
  updateCafeVirtualLinkByAdmin(@Param('id') id: string, @Body() updateDto: UpdateCafevirtuallinkDto) {
    return this.cafevirtuallinksService.updateCafeVirtualLinkByAdmin(+id, updateDto,);
  }

  @Patch('admin/update/image/:imageId')
  @UseGuards(AdminAuthGuard)
  updateCafeVirtualLinkThumbnailImageByAdmin(@Param('imageId') imageId: string, @Body() updateDto: UpdateCafeVirtaulLinkThumbnailImageDto) {
    return this.cafevirtuallinksService.updateCafeVirtualLinkThumbnailImageByAdmin(+imageId, updateDto);
  }
}
