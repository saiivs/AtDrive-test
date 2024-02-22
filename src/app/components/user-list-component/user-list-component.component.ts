import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/interfaces/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit,OnDestroy {

  constructor(
    private http:HttpClient,
    private userService:UserServiceService
    ){}

  apiURl:string = 'https://jsonplaceholder.typicode.com/users';
  userList:user[] = [];
  filteredList:user[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'phone','email', 'website'];
  noUserFound:Boolean = false;
  subscription!:Subscription

  filterInput!:string;

  // Task 1: fetching the response and displaying the user list
  ngOnInit(): void {
    this.http.get<user[]>(this.apiURl).subscribe((res)=>{
      this.userList = res;
      this.filteredList = this.userList;
    })

  // Task 3: Injecting the userService and fetching the user list
  this.subscription = this.userService.getUsers().subscribe((res)=>{
    this.userList = res;
    this.filteredList = this.userList;
  })
  }

  // Task 2: implementing filter/serach functionality for the users list
  filterList():void{
    this.filteredList = this.userList.filter((user)=>{
      return user.name.toLowerCase().includes(this.filterInput.toLowerCase()) || user.email.toLowerCase().includes(this.filterInput.toLowerCase())
    })
    this.filteredList = this.filterInput == '' ? this.userList : this.filteredList;
    this.noUserFound = this.filteredList.length == 0 ? true : false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
