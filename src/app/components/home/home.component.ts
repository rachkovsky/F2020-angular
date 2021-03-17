import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../interfaces/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users!: [User] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    })
  }

}
