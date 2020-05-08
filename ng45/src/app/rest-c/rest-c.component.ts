import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-c',
  templateUrl: './rest-c.component.html',
  styleUrls: ['./rest-c.component.scss']
})
export class RestCComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, '', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  constructor() { }

  ngOnInit() {
  }

}

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}
