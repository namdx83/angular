import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() users : any
  constructor() { }

  ngOnInit(): void {
  }
 
  onedit(id: number){

  }
  oneDelete(id: number) {

  }

}