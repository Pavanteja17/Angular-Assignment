import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

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
