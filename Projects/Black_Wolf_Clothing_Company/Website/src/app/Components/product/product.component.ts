import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';
import { Observable } from 'rxjs';
import { Size } from 'src/app/Interfaces/Size';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{

  product!: Observable<Product>;
  sizes: Size[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit()  {
      const id = this.route.snapshot.paramMap.get('Id')!;
      this.product = this.productService.getProduct(id);
      this.sizes = this.productService.getSizes();
  }
}

