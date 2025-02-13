import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  standalone: false,

  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {

  protected readonly sessionStorage = sessionStorage;


  getRole(){
    return this.sessionStorage.getItem('role');
  }
}
