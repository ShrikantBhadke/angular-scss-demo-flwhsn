import { SimpleChange } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = "Let's build some amazing";
  widths: any = {};
  selectedTheme: string;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.selectedTheme);
  }

  ngDoCheck() {
    // console.log(this.widths);
    // console.log(this.you);
  }

  updateTheme(color: string): void {
    console.log(color, 'app');
    this.selectedTheme = color;
  }
}
