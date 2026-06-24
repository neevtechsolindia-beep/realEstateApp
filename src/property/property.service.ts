import { Injectable } from '@nestjs/common';
import { PropertyRepository } from './property.repository.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { userLoginCheckDto } from './dto/userLoginCheck.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly repo: PropertyRepository) {}

  create(dto: CreatePropertyDto) {
    return this.repo.create(dto);
  }

  findAll() {
    return this.repo.findAll();
  }

  findOne(id: number) {
    return this.repo.findById(id);
  }

  
  checkLogin(userLoginto: userLoginCheckDto) {
    //return 'Hello12';
    return this.repo.checkLogin(userLoginto);
  }
  getView() {
    //return 'Hello12';
    //return this.repo.checkLogin(userLoginto);
    return this.repo.getView();
  }

    getProperties() {
    //return 'Hello12';
    //return this.repo.checkLogin(userLoginto);
    return this.repo.getProperties();
  }

   checkLogin1() {
    console.log('from GitTest2')
    return 'Hello123';
    //return this.repo.checkLogin(userLoginto);
  }
}
