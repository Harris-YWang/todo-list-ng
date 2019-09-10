import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul>
      <li>Welcome to Todo-list project!</li>
      <li routerLink="todo" routerLinkActive="active">Todo</li>
      <li routerLink="about" routerLinkActive="active">About</li>
    </ul>
  `,
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
