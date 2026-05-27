import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { userLoginCheckDto } from './dto/userLoginCheck.dto';


@Controller('properties')
export class PropertyController {
  constructor(private readonly service: PropertyService) {}

  @Post()
  create(@Body() dto: CreatePropertyDto) {
    return this.service.create(dto);
  }

  @Post('check-login')
  checkLogin(@Body() userLoginCheckdto: userLoginCheckDto) {
    //return 'Hello';
    return this.service.checkLogin(userLoginCheckdto);
  }

  
  @Post('check-login1')
  checkLogin1() {
    return 'Hello';
    //return this.service.checkLogin(userLoginCheckdto);
  }


  @Get('get-properties')
  getProperties() {
    //return 'Hello';
    return this.service.getProperties();
  }

  @Get('get-view')
  getView() {
    //return 'Hello';
    return this.service.getView();
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }
}
