export interface RoomListParams {
  page?:number
  size?:number
  sort?:string
  roomType?:string
  propertyType?:string
  priceMin : number | null
  priceMax : number | null
}
