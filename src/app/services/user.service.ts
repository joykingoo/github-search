import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private username: string;

  constructor(private http: Http) {
    console.log('service now ready');
    this.username = 'joyjoie';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token =d1a4b5149175e44c92d4b29f6fab41c4df850acb")
      .pipe(map(res => res.json()));
  }
}
