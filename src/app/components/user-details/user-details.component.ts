import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { UserDetails } from 'src/app/models/user-details.model';
import { UserRepos } from 'src/app/models/user-repos.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public username: string;
  public userDetails: UserDetails=<UserDetails>{};
  public userReposes: UserRepos[];

  constructor(private activeRoute: ActivatedRoute, private userService: UserService) { }


  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.username = params['username'];
      this.userService.getUserDetails(this.username).subscribe(data => {
        this.userDetails = data;
      });
      this.userService.getUserRepos(this.username).subscribe(data => {
        this.userReposes = data;
      });
   });
  }

}
