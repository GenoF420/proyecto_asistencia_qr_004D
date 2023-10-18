import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://duoc-qr.hinotori.moe'
  
  constructor(private http: HttpClient, private storage:StorageService) { }

  login(username:String, password:String): Observable<boolean> { 
  
    let data = {
      email: username, 
      password : password
    } 

    return this.http.post(this.url + '/auth', { "email": username, "password": password }, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.storage.set("access_token", response.body["access_token"]);
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false))
    );
  }

  logout(resourceId:number, authToken:string): Observable<any>{
    const url = `${this.url}/recurso/${resourceId}`;

    
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });

   
    return this.http.delete(url, {headers});
  }
}
