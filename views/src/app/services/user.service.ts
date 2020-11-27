import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath = 'apiUsers/api/users';

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    return this.http.post(this.basePath, {username: username, password: password});
  }

  login (username, password) {
    return this.http.post(this.basePath + '/login', {username: username, password: password});
  }

  get() {
    try {
      return window.localStorage.getItem('idUser');
    } catch(err) {
      return null;
    }
  }
}
