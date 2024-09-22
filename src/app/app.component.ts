import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'test-app-promise';

  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      this.title = 'test-app-promise_v2';
      console.log('v2');
      resolve('all is ok');
      //reject('failed');
    })
    promise
    .then((result) => { 
      this.title = 'test-app-promise_v30'; 
      console.log(result);
      return result + ' then1';
    })
    .then((result) => { 
      this.title = 'test-app-promise_v31'; 
      console.log(result);
      return result + ' then2';
    })
    .then((result) => { 
      this.title = 'test-app-promise_v32'; 
      console.log(result);
      return result + ' then3';
    })
    .catch(() => { 
      this.title = 'test-app-promise_v4';
      console.log('catch');
    })
    .finally(() => {
      console.log('promise is ready');
    })
  }
}
