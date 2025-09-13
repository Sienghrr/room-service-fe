import {RoomLocation} from './room-location';
import {Enum, PropertyType, RoomType} from './enum';

export interface Room {
  id?:string
  name?:number
  price?:number
  floor?:number
  roomSize?:number
  location?:RoomLocation
  hasFan?:boolean
  hasAirConditioner?:boolean
  hasParking?:boolean
  hasPrivateBathroom?:boolean
  hasBalcony?:boolean
  hasKitchen?:boolean
  hasFridge?:boolean
  hasWashingMachine?:boolean
  hasTV?:boolean
  hasWiFi?:boolean
  hasElevator?:boolean
  maxOccupants?:number
  isPetFriendly?:boolean
  isSmokingAllowed?:boolean
  isSharedRoom?:boolean
  genderPreference?:Enum
  roomType?:RoomType
  propertyType?:PropertyType
  distanceToCenter?:number
  nearbyLandmarks?:string[]
  isUtilityIncluded?:boolean
  depositRequired?:boolean
  minStayMonths?:number
  hasPhotos?:boolean
  photoCount?:number
  hasVideoTour?:boolean
  verifiedListing?:boolean
  availableFrom?:string
  availableTo?:string
  createdAt?:string
  lastUpdated?:string
  extraAttributes?:Record<string, any> // in backend (Map<String,Object>)
}
