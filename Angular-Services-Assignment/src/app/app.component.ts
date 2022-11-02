import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
users?:User[];
  constructor(private userService:UserService) {
    this.userService.getPosts().subscribe(response=>{
      this.users=response;
      console.log(this.users);
    })
   }

  ngOnInit(): void {
  }

}