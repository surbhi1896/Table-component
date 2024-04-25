import { Component } from '@angular/core';
import { UserDataService } from './service/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment';


  showModal: boolean = false;
  showUserData: boolean = false;
  showTodoData: boolean = false;
  showAlbumData:boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor(private _userService:UserDataService){}

  column:any;
  data:any;
  tableHeading:string="";
  tableFooterText:string="";
  tablewidth:string="";
  tableHeight:string="";
  
  ngOnInit(): void {
    
  }

  toggleUser(){
    this.tableHeading = "User Information Table";
    this.tableFooterText = "User Info Table Footer";
    this.tablewidth='1200px';
    this.tableHeight='550px';
    this.column = [
      {header: 'ID', field:'id'},
      {header: 'Name', field:'name'},
      {header: 'User Name', field:'username'},
      {header: 'Email', field:'email'},
      {header: 'Phone', field:'phone'}
    ];
    this._userService.getUserData().subscribe({
      next: (response:any)=>{
        this.data = response;
      }

    });
    this.showUserData = !this.showUserData;
  }

  toggleTodo(){
    this.tablewidth='900px';
    this.tableHeading = "Todo List";
    this.tableFooterText = "Todo List Table Footer";
    this.tableHeight='600px';
    this.column = [
      {header: 'User Id', field:'userId'},
      {header: 'ID', field:'id'},
      {header: 'Title', field:'title'},
      {header: 'Completed', field:'completed'}
    ];
    this._userService.getTodoData().subscribe({
      next: (response:any)=>{
        this.data = response;
      }

    });
    this.showTodoData = !this.showTodoData;
  }

  toggleAlbum(){
    this.tableHeading = "Album Table";
    this.tableFooterText = "Album Table Footer";
    this.tablewidth='750px';
    this.tableHeight='550px';
    this.column = [
      {header: 'User Id', field:'userId'},
      {header: 'ID', field:'id'},
      {header: 'Title', field:'title'}
    ];
    this._userService.getAlbumData().subscribe({
      next: (response:any)=>{
        this.data = response;
      }

    });
    this.showAlbumData = !this.showAlbumData;
  }
}
