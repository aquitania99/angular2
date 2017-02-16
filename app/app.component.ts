import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
	selector: 'my-app',
	template: `
		<header>
			<nav class="navbar navbar-inverse">
				<div class="navbar-header">
					<a href="/" class="navbar-brand">Akela</a>
				</div>
			</nav>
		</header>

		<main>

			<div class="row">
				<div class="col-sm-4">
					<div *ngIf="users">
						<ul class="list-group users-list">
							<li class="list-group-item"
							  *ngFor="let user of users"
							  (click)="selectUser(user)"
							  [class.active]="user === activeUser">
								{{ user.name }}  ( {{ user.username }} )  ID: {{ user.id }}
							</li>
						</ul>
					</div>
				</div>
				<div class="col-sm-8">
					<div class="jumbotron" *ngIf="activeUser">
						<h2>{{ activeUser.name }} <small>{{ activeUser.username }}</small></h2>
					</div>

					<div class="jumbotron" *ngIf="!activeUser">
					<span class="glyphicon glyphicon-hand-left"></span>
					<h2>Welcome!</h2>
					<p> Choose a User from the Seeonee Pack!</p>
					</div>

				</div>
			</div>

		</main>

		<footer class="text-center">
			<div class="row">
				Copyright &copy; 2017
			</div>
		</footer>
  	  `,
  	  styles: [`
  	  	.users-list li {
  	  		cursor: pointer;
  	  	}
  	  	.jumbotron .glyphicon {
  	  		font-size: 80px;
  	  	}
  	  `]
})
export class AppComponent {
	message = 'Hello!';
	users: User[] = [
		{ id: 25, name: 'Sergio', username: 'aquitania99' },
		{ id: 27, name: 'Tom', username: 'tommythecat' },
		{ id: 28, name: 'Gaby', username: 'gabagaba' },
	];
	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}
}
