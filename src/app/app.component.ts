import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircleLeft);
  }

  title = 'Deckmon';

  showHeader: boolean = false;
  showFooter: boolean = false;
}
