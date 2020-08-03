import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url = 'https://dev-ms.worldpay.com/userfirm';

  constructor(private http: HttpClient) { }
  searchData(name: string): Observable<any> {
    return this.http.get(`${this.url}/${name}`).pipe(
      map(results => results['Search'])
    );
  }
  getUserFirm(username){
    return this.http.get(`${this.url}/${username}`);
  }
  getRemoteData(){
    return this.http.get(this.url + '/iqnow.uat');
  }
}
