import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database/database.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { userLoginCheckDto } from './dto/userLoginCheck.dto';

@Injectable()
export class PropertyRepository {
  constructor(private readonly db: DatabaseService) {}

  async create(data: CreatePropertyDto) {
    const query = `
      INSERT INTO properties (title, description, price, location)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [
      data.title,
      data.description,
      data.price,
      data.location,
    ];

    const result = await this.db.query(query, values);
    return result.rows[0];
  }


  async getProperties() {

    const query = `SELECT * FROM properties`;

   

    const result = await this.db.query(query);
    //return result.rows[0];
    if((result.rows).length>0){
    // -${result.rows[0]['username']}
    return  result.rows;
    }
    else{
    return { 'message':'Failed to retrieve Properties Info',status:'failed' };

    }
    
  }

  async getView() {

    const query = `SELECT * FROM view`;

   

    const result = await this.db.query(query);
    //return result.rows[0];
    if((result.rows).length>0){
    // -${result.rows[0]['username']}
    return  result.rows;
    }
    else{
    return { 'message':'Failed to retrieve Properties Info',status:'failed' };

    }
    
  }

  async checkLogin(data: userLoginCheckDto) {

// return 'Hello';
//     const query1 = `
//     SELECT * FROM users limit 1
//     `;

//     const values1 = [
     
//     ];

//     const result1 = await this.db.query(query1, values1);
//     return result1.rows[0];


    const query = `
    SELECT * FROM users where username=$1 and password=$2
    `;

    const values = [
      data.username,
      data.password
    ];

    const result = await this.db.query(query, values);
    //return result.rows[0];
    if((result.rows).length>0){
    const accessToken = `mock-token-for-user`;
    // -${result.rows[0]['username']}
    return { 'token':accessToken,status:'sucess' };

    }
    else{
    return { 'token':'Invalid accessToken',status:'failed' };

    }
    
  }

  async findAll() {
    const result = await this.db.query(
      `SELECT * FROM properties ORDER BY created_at DESC`
    );
    return result.rows;
  }

  async findById(id: number) {
    const result = await this.db.query(
      `SELECT * FROM properties WHERE id = $1`,
      [id],
    );
    return result.rows[0];
  }
}
