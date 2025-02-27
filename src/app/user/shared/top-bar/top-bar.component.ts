import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-top-bar',
  imports: [
    SearchComponent,
    InlineSVGModule,
    HttpClientModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
