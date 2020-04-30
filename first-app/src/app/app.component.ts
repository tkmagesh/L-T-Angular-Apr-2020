import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(){
    /* setTimeout(() => {
      this.title = 'My Angular App';
    }, 10000); */
  }

  changeTitle(){
    //console.log('The title is about to be changed');
    this.title = 'My New App'
  }
}
