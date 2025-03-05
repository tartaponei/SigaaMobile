import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { DarkModeSwitchComponent } from '../../../shared/dark-mode-switch/dark-mode-switch.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [InlineSVGModule,
    HttpClientModule, 
    DarkModeSwitchComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
