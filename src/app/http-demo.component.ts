import { Component } from '@angular/core';
import { FollowersComponent } from './+followers';
import {Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'http-demo-app',
  templateUrl: 'http-demo.component.html',
  styleUrls: ['http-demo.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/followers', component: FollowersComponent}
])
export class HttpDemoAppComponent {

	title = 'Http-Demo and Router';

	constructor(){
		
	};

	ngOnInit() {
		
	}
}