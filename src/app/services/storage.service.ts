import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  public set(key: string, value: any) {
    localStorage.setItem(key, value)
  }

  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public delete(key: string) {
    localStorage.removeItem(key)
  }

  public clear() {
    localStorage.clear();
  }
}