import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = "https://localhost:7268/api/Order";
  constructor(private http:HttpClient) { }

  getAllOrders() : Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  createOrder(order:Order) : Observable<Order> {
    return this.http.post<Order>(this.url, order);
  }

  putOrder(id:number, newValues:Order) : Observable<any> {
    return this.http.put<any>(this.url + "/" + id, newValues);
  }

  deleteOrder(id:number) : Observable<any> {
    return this.http.delete<any>(this.url + "/" + id);
  }
}
