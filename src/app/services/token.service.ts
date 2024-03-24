import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private url : string = "https://api.mercadolibre.com/oauth/token";


  constructor(private http : HttpClient) { }

  getToken(){
    const body = new Map<string, string>()
    body.set("grant_type", "refresh_token");
    body.set("client_id", "3842532818957091");
    body.set("client_secret", "VEZ1sj8g2EMuCZjV5euUYbIYFDwbmmRC");
    body.set("refresh_token", "TG-65fda995f4201100017a75b7-258486877");
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post(this.url,body, {headers});
  }
}
