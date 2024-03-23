import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductMeli } from '../model/producto-meli';

@Injectable({
  providedIn: 'root'
})
export class MeliService {

  private apiUrl : string = 'https://api.mercadolibre.com/items?ids=MLA1511571490,MLA1389288575,MLA1524467234,MLA1391596807';
  private apiUrl2 : string = `https://api.mercadolibre.com/items?ids=`;

  constructor(private http : HttpClient) { }

  getProduct(item: string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer APP_USR-3842532818957091-032220-b32bf4cc334f13358e3a6a9a1131c87b-258486877'
    });
    const url = this.apiUrl2.concat(item)
    return this.http.get<ProductMeli>(url, {headers});
  }

  getProducts(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer APP_USR-3842532818957091-032220-b32bf4cc334f13358e3a6a9a1131c87b-258486877'
    });
    return this.http.get<ProductMeli>(this.apiUrl, {headers});
  }
}
