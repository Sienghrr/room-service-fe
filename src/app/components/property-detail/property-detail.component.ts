import { Component } from '@angular/core';
import {PropertyGalleryComponent} from './sub-components/property-gallery/property-gallery.component';
import {PropertyDescriptionComponent} from './sub-components/property-description/property-description.component';
import {PropertyAmenitiesComponent} from './sub-components/property-amenities/property-amenities.component';
import {PropertyMapComponent} from './sub-components/property-map/property-map.component';
import {PropertyOverviewComponent} from './sub-components/property-overview/property-overview.component';

@Component({
  selector: 'app-property-detail',
  imports: [
    PropertyGalleryComponent,
    PropertyDescriptionComponent,
    PropertyAmenitiesComponent,
    PropertyMapComponent,
    PropertyOverviewComponent
  ],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {

}
