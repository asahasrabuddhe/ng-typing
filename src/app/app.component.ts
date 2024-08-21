import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  paragraph: string = faker.lorem.paragraph();
  enteredText: string = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
  }
}
