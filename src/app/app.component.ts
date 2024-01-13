import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component'
import { HomeComponent } from '@angular-ecommerce/home';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HomeComponent],
  selector: 'angular-ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ecommerce';
}
