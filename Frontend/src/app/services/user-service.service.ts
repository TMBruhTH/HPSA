import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  addUser(user: User) {
    let users = new Array();
    if (localStorage.getItem('Users')) {
      var sUsers: string = '';
      sUsers = JSON.parse(localStorage.getItem('Users') as string);
      users.push(user, ...sUsers);
    } else {
      users.push(user);
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
