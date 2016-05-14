import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-followers',
  templateUrl: 'followers.component.html',
  styleUrls: ['followers.component.css']
})
export class FollowersComponent implements OnInit {

	followers: {};
	selectedFollower: {};

  constructor(public http: Http) { 
		this.http = http;
  }

  ngOnInit() {
		this.getFollowers();
  }

  getFollowers() {
		this.http.get('https://api.github.com/users/gd46/followers')
			.map((res) => {
				return this.followers = res.json();
			})
			.subscribe(res => this.followers = res);
  }

  selectFollower(follower) {
		this.selectedFollower = follower;
		console.log(this.selectedFollower);
  }

}
