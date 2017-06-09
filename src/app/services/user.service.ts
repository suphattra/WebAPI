import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  //Parameter
  userArray =[
    {name:'kik',tel:'0881476630',email:'a@hotmail.com'}
    ,{name:'terk',tel:'0881476631',email:'b@hotmail.com'}
    ,{name:'art',tel:'0881476632',email:'c@hotmail.com'}
    ,{name:'non',tel:'0881476633',email:'d@hotmail.com'}
    ,{name:'may',tel:'0881476634',email:'e@hotmail.com'}
  ]
  endPointUrl = "http://www.nextflow.in.th/example/phonegap/ng-jsonp";

  //Constructor
  constructor(public http:Http) { }

  //Method
  getObjJson(){

    let url = this.endPointUrl + "/simple-string.php";
    let subscription = this.http.get(url).map(res=> res.json());
    return subscription;
    // this.http.get(url)
    //   .map(res => res.json())
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.result = data.message;
    //   });
  }

  getArrayJson(){
    let url = this.endPointUrl + "/simple-array.php";
      return this.http.get(url).map(res=> {
      return res.json();
    });
  }
}


