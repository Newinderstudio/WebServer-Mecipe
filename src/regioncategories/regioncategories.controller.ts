import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { RegioncategoriesService } from './regioncategories.service';
import { CreateRegioncategoryDto } from './dto/create-regioncategory.dto';
import { UpdateRegioncategoryDto } from './dto/update-regioncategory.dto';
import { AdminAuthGuard } from 'src/auth/jwt.guard.admin';
import { Public } from 'src/util/decorators';

@Controller('regioncategories')
export class RegioncategoriesController {
  constructor(private readonly regioncategoriesService: RegioncategoriesService) { }



  @Get('closure')
  @Public()
  findAllRegionCategories() {
    return this.regioncategoriesService.findAllRegionCategories();
  }

  @Post('admin/create')
  @UseGuards(AdminAuthGuard)
  createRegionCategoryByAdmin(@Body() createRegioncategoryDto: CreateRegioncategoryDto) {
    return this.regioncategoriesService.createRegionCategoryByAdmin(createRegioncategoryDto);
  }

  @Get('admin/child/:parentId')
  @UseGuards(AdminAuthGuard)
  findChildRegionCategoriesByAdmin(@Param('parentId') parentId: string) {
    return this.regioncategoriesService.findChildRegionCategoriesByAdmin(+parentId);
  }

  @Patch('admin/update/:id')
  @UseGuards(AdminAuthGuard)
  updateRegionCategoryByAdmin(@Param('id') id: string, @Body() updateDto: UpdateRegioncategoryDto, @Query('newParentId') newParentId: string) {
    return this.regioncategoriesService.updateRegionCategoryByAdmin(+id, updateDto, newParentId ? +newParentId : undefined);
  }

  @Patch('admin/disable/:id')
  @UseGuards(AdminAuthGuard)
  disbleRegionCategoryByAdmin(@Param('id') id: string, @Query('isDisable') isDisable: string) {
    return this.regioncategoriesService.disbleRegionCategoryByAdmin(+id, isDisable === 'true');
  }
}
