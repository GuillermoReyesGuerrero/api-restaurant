import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiURL = 'http://localhost:4000/api/';
  public err = 'error';

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiURL+'/users').pipe(map(res => {
      return res;
    }));
  }

}
