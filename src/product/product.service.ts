/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  findAll() {
    return [
      { id: 1, name: 'product 1' },
      { id: 2, name: 'product 2' },
      { id: 3, name: 'product 3' },
      { id: 4, name: 'product 4' },
      { id: 5, name: 'product 5' },
      { id: 6, name: 'product 6' },
      { id: 7, name: 'product 7' },
    ]
  }

}
