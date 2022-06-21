import { Component, Input, OnInit, VERSION } from '@angular/core';

const API = 'https://anapioficeandfire.com/api';

//
// TODO 1:
//  * add component to the app 
//  * fix click handler

// @Component({
//   selector: 'app-button',
//   template: `<button (click)="props.click()"> Button </button>`, // TODO render props.label
// })
// class ButtonComponent {
//   @Input() props: any;
// }

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let character of characters">
        {{ character.name }} 
        <!-- TODO 3: Palindrom flag -->
      </li>
    </ul>

    <!-- <app-button [props]="buttonOptions"> Refresh </app-button> -->
 `,
  styles: [``],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ids = [12, 13, 16, 20, 27];

  characters; // TODO 1.2 add typings
  buttonOptions; // TODO add typings

  constructor() {}

  ngOnInit(): void {
    this.getCharactersStub();
    
    this.buttonOptions = {
      label: 'Refresh',
      click: this.getCharactersFromApi,
    };
  }

  getCharactersStub(){
    this.characters = [{
      name: 'Hannah'
    }];
  }

  getCharactersFromApi() {
    

    // TODO 2 fix block below
    // for (var i = 0; i < this.ids.length; i++) {
    //   var id = this.ids[i];
    //   setTimeout(() => {
           // TODO 4: nice to have: to use rxjs
    //     this.httpClient
    //       .get(`${API}/characters/ ${id}`)
    //       .subscribe((character) => {
    //         this.characters.push(character);
    //       });
    //   });
    // }
  }
}
