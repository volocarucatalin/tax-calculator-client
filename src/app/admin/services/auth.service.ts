import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 1,
      name: "Catalin",
      email: "catalin@gmail.com",
      password: "abc"
    },
    {
      id: 2,
      name: "Mihai",
      email: "mihai@gmail.com",
      password: "abc"
    },
    {
      id: 3,
      name: "Sergiu",
      email: "sergiu@gmail.com",
      password: "abc"
    },

  ]
  sessions: any;
  constructor() {
  }

  login(email: string,password: string){
    let user = this.users.find((usr) => usr.email === email && usr.password === password);
    if(user){
      this.sessions = user;
      localStorage.setItem('session',JSON.stringify(this.sessions));
    }
    return user;
  }
}
