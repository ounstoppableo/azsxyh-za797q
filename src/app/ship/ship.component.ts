import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css'],
})
export class ShipComponent implements OnInit {
  constructor(private cartService: CartService) {}
  shippingCosts!: Observable<{ type: string; price: number }[]>;
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
