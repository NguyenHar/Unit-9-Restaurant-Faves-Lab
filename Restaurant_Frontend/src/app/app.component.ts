import { Component } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant_Frontend';

  newOrder:Order = {} as Order;
  orders:Order[] = [];

  constructor(private orderService:OrderService) {
    this.orderService.getAllOrders().subscribe(
      (result) => {
        this.orders = result;
      }
    );
  }

  addOrder() : void {
    this.orderService.createOrder(this.newOrder).subscribe(
      (result) => {
        if (this.newOrder.orderAgain == null)
          this.newOrder.orderAgain = false;
        this.orders.push(this.newOrder);
        this.newOrder = {} as Order;
      }
    );
  }

  deleteOrder(id:number) : void {
    this.orderService.deleteOrder(id).subscribe(
      () => {
        for (let i=0; i<this.orders.length; i++)
        {
          if (this.orders[i].id == id)
          {
            this.orders.splice(i,1);
            break;
          }
        }
      }
    );
  }

  editOrder(index:number, newValues:Order) : void {
    this.orderService.putOrder(newValues.id, newValues).subscribe(
      () => {
        this.orders[index] = newValues;
      }
    );
  }

}
