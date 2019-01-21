import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repos:any[string];

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos =repos;
    });
  }
  ngOnInit() {
  }

}
