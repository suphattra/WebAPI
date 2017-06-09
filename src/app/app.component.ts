import { User } from './user';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  userArray = [];
  result;

  constructor(public userService: UserService) {
    this.userArray = this.userService.userArray;
  }

  addNewUser(newName) {
    if (newName == '1234') {
      alert('ok');
    }
    // let newUser = { name: newName, tel:'', email:''};
    // this.userService.userArray.push(newUser);
  }

  sendRequest() {
    let subscription = this.userService.getObjJson();
    
    subscription.subscribe((data) => {
        console.log(data);
        this.result = data.message;
    });
  }

  getArray() {
    this.userService.getArrayJson().subscribe(data =>{
    this.userService.userArray =data;                            
   });
     
  }



}