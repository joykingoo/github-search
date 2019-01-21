import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile: any[];
  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile =profile;
    });
  }

  ngOnInit() {
  }
}
