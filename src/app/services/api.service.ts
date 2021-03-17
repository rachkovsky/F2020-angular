import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../interfaces/user'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  searchUsers(str: string): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: str,
      body: 'bar',
    });
  }
}
