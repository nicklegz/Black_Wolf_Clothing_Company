import { Injectable } from '@angular/core';
import { Products } from 'src/app/Data/MockData'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartItem(): number {
    return Products.length;
  }
}
