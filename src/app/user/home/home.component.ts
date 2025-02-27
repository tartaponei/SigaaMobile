import { Component } from '@angular/core';
import { BottomBarComponent } from '../shared/bottom-bar/bottom-bar.component';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';

@Component({
  selector: 'app-home',
  imports: [
    BottomBarComponent,
    TopBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
