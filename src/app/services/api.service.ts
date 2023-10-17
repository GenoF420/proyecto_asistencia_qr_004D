import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://duoc-qr.hinotori.moe'
  
  constructor(private http: HttpClient) { }

  login(username:String, password:String): boolean { 
  
    let data = {
      email: username, 
      password : password
    } 

    this.http.post(this.url+"/auth", data).subscribe((r) => {
      console.log(r);
    })

    return false;
  }
  delete(resourceId:number, authToken:string): Observable<any>{
    const url = `${this.url}/recurso/${resourceId}`;

    
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

   
    return this.http.delete(url, {headers});
  }
}
