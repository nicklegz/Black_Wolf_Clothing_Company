import { Component, OnInit } from '@angular/core';
import { TopNavService } from 'src/app/Services/top-nav.service'
import {MenuItem} from 'src/app/Interfaces/MenuItem';
import { CartService } from 'src/app/Services/cart.service'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{

  menuItems: MenuItem[] = [];
  cartCount: number = 0;

  constructor(private topNavService: TopNavService, private cartService: CartService) {}

  ngOnInit() {
    this.getMenuItems();
    this.getCartCount();
  }

  getMenuItems(): void{
    this.menuItems = this.topNavService.getMenuItems();
  }

  getCartCount(): void{
    this.cartCount = this.cartService.getCartItem();
  }

}
