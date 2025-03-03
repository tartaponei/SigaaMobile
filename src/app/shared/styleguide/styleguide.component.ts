import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-styleguide',
  imports: [InlineSVGModule, HttpClientModule],
  templateUrl: './styleguide.component.html',
  styleUrl: './styleguide.component.css'
})
export class StyleguideComponent {

}
