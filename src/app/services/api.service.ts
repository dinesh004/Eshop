import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { catchError, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }




   GetAllData="https://fakestoreapi.com/products/categories"

   getAllCategory(): Observable<any>{
     return this.http.get(this.GetAllData)
   }


   GetDataByCategory= "https://fakestoreapi.com/products/category/"
   getDataByCategory(cname: any):Observable<any>{
     return this.http.get(this.GetDataByCategory+cname)
   }

}
