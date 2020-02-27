export interface User{
  email: string
  password: string
}

export interface RegisterUser{
  email: string
  password: string
}

export interface Profile{
  id?: string
  email: string
  username: string
  image: string
  first_name: string
  last_name: string
  phone: string
}

export interface ProfileUpdate{
  id?: string
  image: any
  first_name: string
  last_name: string
  phone: string
}

export interface AuthResponse{
  auth_token: string
}

export interface Category{
  id: string
  name: string
}

export interface VinCheck{
  vin_number: string
}

export interface BlogPost{
  id?: string
  title: string
  category: Category
  image: string
  content: string
  tags: string
  date?: string
  user?: string
}

export interface CarCondition{
  id: string
  name: string
}

export interface CarBrand{
  id: string
  name: string
}

export interface CarModel{
  id: string
  brand: string
  name: string
}

export interface CarBody{
  id: string
  name: string
}

export interface CarColor{
  id: string
  name: string
}

export interface CarFuel{
  id: string
  name: string
}

export interface CarTransmission{
  id: string
  name: string
}

export interface CarWheelDrive{
  id: string
  name: string
}

export interface CarRegion{
  id: string
  name: string
}

export interface CarComfortFeatures{
  id?: string
  audio_system: boolean
  blacked_windows: boolean
  central_lock: boolean
  chair_warmer: boolean
  climate_control: boolean
  cloth: boolean
  computer: boolean
  conditioner: boolean
  cruise_control: boolean
  fr_window_system: boolean
  gps_tv_dvd: boolean
  leather: boolean
  main_chair_system: boolean
  second_chair_system: boolean
  up_window: boolean
  velour: boolean
  wheel_strength: boolean
  wheel_width: boolean
  window_warmer: boolean
}

export interface CarSafetyFeatures{
  id?: string
  abs: boolean
  airbag: boolean
  alarm: boolean
  all_season_tires: boolean
  anti_theft: boolean
  curtain: boolean
  esp: boolean
  fog_lights: boolean
  head_washer: boolean
  light_sensor: boolean
  multi_wheel: boolean
  parking_sensor: boolean
  passenger_airbag: boolean
  rain_sensor: boolean
  rear_airbag: boolean
  simple_disks: boolean
  steel_disks: boolean
  summer_tires: boolean
  tcs: boolean
  winter_tires: boolean
  xenon: boolean
}

export interface MoneyType{
  id?: string
  name: string
}

export interface CarPostSubmit{
  id?: string
  car_body: string
  car_color: string
  car_condition: string
  car_fuel: string
  car_transmission: string
  car_wheel_drive: string
  car_region: string
  car_brand: string
  car_model: string

  car_year: string
  car_mileage: string
  car_notes: string
  vin_number?: string
  price: string
  money_type: string

  car_comfort_data: CarComfortFeatures
  car_safety_data: CarSafetyFeatures
}

export interface CarPost{
  id?: string
  car_body: CarBody
  car_color: CarColor
  car_condition: CarCondition
  car_fuel: CarFuel
  car_transmission: CarTransmission
  car_wheel_drive: CarWheelDrive
  car_region: CarRegion
  car_brand: CarBrand
  car_model: CarModel

  car_comfort: CarComfortFeatures
  car_safety: CarSafetyFeatures

  car_year: string
  car_mileage: string
  car_notes: string
  vin_number?: string
  price: string
  money_type: any
  user: Profile
  date: string

  images: PostImage[]
}

export interface PostImage{
  id?: string
  car_post: string
  image: any
}