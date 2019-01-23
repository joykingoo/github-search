import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl= environment.apiUrl;
  private username:string;
  private repo:string;

    constructor( private http:HttpClient) {
    console.log('service now ready');
  this.username ='joyjoie';
  this.repo='';
}
getProfileInfo() :any{
  return this.http.get("https://api.github.com/users/"+ this.username +"?access_token=d1a4b5149175e44c92d4b29f6fab41c4df850acb")
  .pipe(map(res =>res));
}

getProfileRepos() :any{
  return this.http.get("https://api.github.com/users/"+ this.username +"/repos?access_token=d1a4b5149175e44c92d4b29f6fab41c4df850acb")
  .pipe(map(res =>res));

}
updateProfile (username:string)
{
  this.username =username;
}

}
