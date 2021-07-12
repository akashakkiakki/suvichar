import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  submitted = false;
  @ViewChild('f') signup: NgForm;

  user = {
    username:'',
    email:'',
    secret:''
   }

  onSubmit(submitted: any){
    this.submitted=true;
this.user.username = this.signup.value.username;
this.user.email = this.signup.value.email;
this.user.secret = this.signup.value.secret;

this.http
.post(
  'https://suvichar-646e6-default-rtdb.firebaseio.com/posts.json',
  this.submitted
)
.subscribe(responseData => {
  console.log(responseData);

});
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.fetchPosts();
  }

onFetchPosts(){
  this.fetchPosts();
}

onClearPosts(){}

private fetchPosts(){
  this.http.get('https://suvichar-646e6-default-rtdb.firebaseio.com/posts.json')
  .subscribe(posts =>{
    console.log(posts);
  });
}
  
}
