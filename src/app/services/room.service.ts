import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environment/environment';
import {RoomListParams} from '../models/room-list-params';
import {Observable} from 'rxjs';
import {Page} from '../models/page';
import {Room} from '../models/room';
import {HttpClient} from '@angular/common/http';
import {buildParams} from '../core/http/utils';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // apiUrl
  private base = `${environment.apiUrl}`


  /*
  **  inject(HttpClient) : this is the new style of injection before we used to inject
  *   through constructor , but this time just say : inject(sth you want to inject) example: inject(HttpClient)
  *   this guys HttpClient : allow us to communicate with our backend apiUrl
  * */
  private http = inject(HttpClient)

  constructor() { }

  list(params?:RoomListParams):Observable<Page<Room>>{
    return this.http.get<Page<Room>>(this.base + "/rooms/search/pagination",{params:buildParams(params)})
  }
}
