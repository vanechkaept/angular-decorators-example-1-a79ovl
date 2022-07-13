import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    console.log('Hello from Class constructor');
  }

  @simpleDecorator(1)
  read(value: boolean) {
    console.log('value is + ', value);
  }
}

function simpleDecorator(num: number) {
  console.log('decorator + ', num);
  return (...data) => {
    console.log(data);
  };
}
