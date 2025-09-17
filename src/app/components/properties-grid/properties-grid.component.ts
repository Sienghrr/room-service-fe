import {Component, inject, input, OnInit, signal} from '@angular/core';
import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room';
import {HttpParams} from '@angular/common/http';
import {RoomListParams} from '../../models/room-list-params';
import {PropertyCardComponent} from '../property-card/property-card.component';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-properties-grid',
  imports: [
    PropertyCardComponent
  ],
  templateUrl: './properties-grid.component.html',
  styleUrl: './properties-grid.component.css'
})
export class PropertiesGridComponent{

  filter =  input.required<RoomListParams>();

  /*
  * ngOnInit is the life cycle hook of angular
  * In case, we want something to load or call when startup , call it inside the ngOnInit method
  * */
  // ngOnInit() {
  //   this.loadData()
  // }

  private roomService = inject(RoomService)
  rooms = signal<Room[]>([]) // ([]) means that default value is empty array

  constructor() {
    toObservable(this.filter)
      .pipe(
        switchMap(f => this.roomService.list(f)),
        takeUntilDestroyed()
      )
      .subscribe(page =>{
        this.rooms.set(page.content)
      })
  }

  /*params : RoomListParams = {page:0 , size:2 , priceMin: null, priceMax : null}

  loadData(){
    this.roomService.list(this.params).subscribe(data => {
      console.log(data);
      this.rooms.set(data.content)
    })
  }*/


}
