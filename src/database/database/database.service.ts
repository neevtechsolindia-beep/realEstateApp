import { Injectable, OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: Pool;

  async onModuleInit() {
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'realestate1',
    });
  }

  query(text: string, params?: any[]) {
    return this.pool.query(text, params);
  }
  fun(){
    console.log('Test Log from Db Services')
  }
}
