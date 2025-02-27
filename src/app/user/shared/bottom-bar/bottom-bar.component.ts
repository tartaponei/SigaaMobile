import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-bottom-bar',
  imports: [
    InlineSVGModule, 
    HttpClientModule
  ],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {

}
