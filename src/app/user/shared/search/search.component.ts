import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-search',
  imports: [
    InlineSVGModule, 
    HttpClientModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
