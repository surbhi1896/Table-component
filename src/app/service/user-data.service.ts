import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getUserData(): Observable<any>{

    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    
  }
  getTodoData(): Observable<any>{

    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');

  }
  getAlbumData(): Observable<any>{

    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');

  }
  


}
