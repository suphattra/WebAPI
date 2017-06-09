import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userArray = [];

  constructor(public userService: UserService) {
    this.userArray = this.userService.userArray;
  }

  ngOnInit() {
  }

}
