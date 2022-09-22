import { Injectable } from '@angular/core';
import { Products } from './Products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getinf():Observable<Products[]>{
    return this.http.get<Products[]>("https://mocki.io/v1/e0182d51-82b5-4e9c-9b76-6f14c9a05551")
  }

}
