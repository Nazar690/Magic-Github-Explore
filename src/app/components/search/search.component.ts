import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public username: string;
  public users: MatTableDataSource<User>;

  displayedColumns: string[] = ['position'];
  constructor(private userService: UserService) { }
  search() {
    if(this.username) {
      this.userService.searchUsers(this.username).subscribe(data => {
        this.users = new MatTableDataSource(data);
        this.users.paginator = this.paginator;
      });
    } 
  }
}
