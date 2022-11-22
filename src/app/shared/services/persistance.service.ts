import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Service for setting / getting current user token into / from localStorage
export class PersistanceService {

  constructor() { }

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving lo localStorage', e)
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      console.error('Errror getting data from localStorage', e)
      return null;
    }
  }
}
