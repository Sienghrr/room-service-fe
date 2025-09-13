import { Component } from '@angular/core';
import {PropertiesHeaderComponent} from "../properties-header/properties-header.component";
import {PropertiesSidebarComponent} from "../properties-sidebar/properties-sidebar.component";
import {PropertiesGridComponent} from '../properties-grid/properties-grid.component';
import {PropertiesListComponent} from '../properties-list/properties-list.component';
import {PaginationComponent} from '../pagination/pagination.component';

@Component({
  selector: 'app-section',
  imports: [
    PropertiesHeaderComponent,
    PropertiesSidebarComponent,
    PropertiesGridComponent,
    PropertiesListComponent,
    PaginationComponent
  ],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

}
