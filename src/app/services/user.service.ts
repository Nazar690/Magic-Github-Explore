import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserDetails } from '../models/user-details.model';
import { UserRepos } from '../models/user-repos.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected url: string;

  constructor(protected _http: HttpClient) {
    this.url = environment.baseUrl;
  }

  public searchUsers(username: string): Observable<User[]> {
    return this._http.get(this.url + `search/users?q=${username}&per_page=100`).pipe(map(data => {
      let usersList = data['items'];
      return usersList.map(function (user: any) {
        return new User(user.login, user.avatar_url, user.html_url);
      });
    }));
  }

  public getUserDetails(username: string): Observable<UserDetails> {
    return this._http.get(this.url + `users/${username}`).pipe(map((data: any) => {
      return new UserDetails(data.login, data.avatar_url, data.html_url, data.name, data.created_at, data.location, data.company, data.email);
    }));
  }

  public getUserRepos(username: string): Observable<UserRepos[]> {
    return this._http.get(this.url + `users/${username}/repos`).pipe(map((data: any) => {
      return data.map(function (repos: any) {
        return new UserRepos(repos.name, repos.html_url);
      });
    }));
  }
} 