import {MenuItem} from 'src/app/Interfaces/MenuItem';
import {Product} from 'src/app/Interfaces/product';
import { Size } from '../Interfaces/Size';

export const menuItems: MenuItem[] = [
  {Name: "Miami Vice Collection"},
  {Name: "Extended Collection"},
  {Name: "Men's"},
  {Name: "Accessories"}
]

export const sizes: Size[] = [
  {ProductSize: "Small" },
  {ProductSize: "Medium" },
  {ProductSize: "Large" },
  {ProductSize: "X-Large" }
]


export const Products: Product[] = [
  {Id: 1, Name: 'Black Wolf White', Price: 50.00, Description: "This is a polyester T-Shirt", Image: "/assets/Images/pink_shirt.webp" },
  {Id: 2, Name: 'Black Wolf Poke', Price: 70.00, Description: "This is a polyester T-Shirt", Image: "/assets/Images/poke_shirt.webp" },
  {Id: 3, Name: 'Black Wolf Polo', Price: 40.00, Description: "This is a Miami Polo" , Image: "/assets/Images/polo_shirt.webp"}
]
