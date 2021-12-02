import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/JBsENdaeZNeY7lx1pDir', userSettings);
    // return of(userSettings);
  }
}
