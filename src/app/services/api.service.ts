import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap, from, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token = "";
  url = 'https://duoc-qr.hinotori.moe';
  
  constructor(private storage: StorageService, private http: HttpClient) {
    console.log(this.storage.get("access_token"))
    this.loadTokenFromStorage();
  }
  
  getAccessToken(): Observable<boolean> {
    return of(this.token != "")
  }

  loadTokenFromStorage() {
    this.token = this.storage.get("access_token") == null ? "" : this.storage.get("access_token")!;
  }

  login(username: String, password: String): Observable<boolean> { 
    console.log("Intentando iniciar sesion...")
    return this.http.post(this.url + '/auth', { "email": username, "password": password }, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.storage.set("access_token", response.body["access_token"]);
          this.token = response.body['access_token'];
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false))
    );
  }

  logout(): Observable<any>{   
    const headers= new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    this.storage.delete("access_token");

   
    return this.http.delete(this.url + '/auth', {headers});
  }

  myself(): Observable<any> {
    return this.http.get(this.url + '/user', { observe: 'response', headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`}) }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body; // Retornar el cuerpo de la respuesta o un objeto vacío
        } else {
          return {}; // En caso de que el estado no sea 200
        }
      }),
      catchError(() => of({})) // Manejar errores y retornar un objeto vacío
    );
  }

  myClasses(): Observable<any> {
        return this.http.get(this.url + '/class', { observe: 'response', headers: new HttpHeaders({'Authorization': `Bearer ${this.token}`}) }).pipe(
          map((response: HttpResponse<any>) => {
            if (response.status === 200) {
              return response.body; // Retornar el cuerpo de la respuesta o un objeto vacío
            } else {
              return {}; // En caso de que el estado no sea 200
            }
          }),
          catchError(() => of({})) // Manejar errores y retornar un objeto vacío
        );
  }
}
