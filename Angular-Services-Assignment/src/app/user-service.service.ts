import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
 getPosts():Observable<User[]>
 {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos');
 }
}