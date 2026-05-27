import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database/database.module';
import { PropertyController } from './property/property.controller';
import { PropertyService } from './property/property.service';
import { PropertyRepository } from './property/property.repository.service';

@Module({
  imports: [DatabaseModule, DatabaseModule,   
],
  controllers: [AppController, PropertyController],
  providers: [AppService, PropertyService, PropertyRepository],
})
export class AppModule {}
