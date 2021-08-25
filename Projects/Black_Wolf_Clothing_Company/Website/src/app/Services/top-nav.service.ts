import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/Interfaces/MenuItem';
import { menuItems } from 'src/app/Data/MockData'

@Injectable({
  providedIn: 'root'
})
export class TopNavService {

  constructor() { }

  getMenuItems(): MenuItem[] {
    return menuItems;
  }
}
