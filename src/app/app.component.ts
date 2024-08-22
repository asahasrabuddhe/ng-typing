import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  paragraph: string = faker.lorem.paragraph();
  enteredText: string = '';
  mistakes: number = 0;

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
    if (this.enteredText.length > 0 && this.enteredText[this.enteredText.length-1] !== this.paragraph[this.enteredText.length-1]) {
      this.mistakes++
    }
  }
}
