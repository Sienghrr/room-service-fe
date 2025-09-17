import { Component } from '@angular/core';
import {PageTitleComponent} from '../page-title/page-title.component';
import {SectionComponent} from '../section/section.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    PageTitleComponent,
    RouterOutlet,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
