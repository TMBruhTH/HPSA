import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: User) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') as string);
    }

    return UserArray.find((element: User) => {
      return element.userName === user.userName && element.password === user.password;
    });
  }
}
