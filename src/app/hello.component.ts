import { EventEmitter, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChange } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <select class="form-control " [(ngModel)]="selectedTheme" (change)=ChangeTheme() >
  <option value="" >Select Theme</option>
  <option *ngFor="let tn of themes" [value]="tn">{{tn}}</option>
</select>`,
  styles: [
    `h1 { font-family: Lato; 
  } }`,
  ],
})
export class HelloComponent implements OnInit {
  themes: string[] = ['dark', 'lite', 'solar'];

  selectedTheme: string = '';
  @Input() name: string;
  @Output() selectedThemeemit: EventEmitter<string> =
    new EventEmitter<string>();
  ngOnInit() {}

  ChangeTheme() {
    // console.log(this.selectedTheme);
    this.selectedThemeemit.emit(this.selectedTheme);
  }
}
