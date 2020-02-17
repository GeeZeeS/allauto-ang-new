import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarCondition, CarBrand, CarModel, CarBody, CarColor, CarFuel, CarTransmission, CarWheelDrive, CarRegion, CarPostSubmit, PostImage, CarPost, MoneyType } from '../interfaces/interfaces';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({ providedIn: 'root' })

export class CarSalesService {
    baseurl = 'https://api.allauto.md/api/v1/autostore'
    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getMoneyTypes(id: number): Observable<MoneyType> {
        var url = ''
        if (id > 0) {
            url = `/money_type/${id}/`
        } else {
            url = '/money_type/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarConditions(id: number): Observable<CarCondition> {
        var url = ''
        if (id > 0) {
            url = `/car_condition/${id}/`
        } else {
            url = '/car_condition/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarBrands(id: number): Observable<CarBrand> {
        var url = ''
        if (id > 0) {
            url = `/car_brand/${id}/`
        } else {
            url = '/car_brand/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarModels(id: number, brand_id: number): Observable<CarModel> {
        var url = ''
        if (id > 0) {
            url = `/car_model/${id}/`
        } else {
            url = `/car_model/?brand=${brand_id}`
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarBody(id: number): Observable<CarBody> {
        var url = ''
        if (id > 0) {
            url = `/car_body/${id}/`
        } else {
            url = '/car_body/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarColor(id: number): Observable<CarColor> {
        var url = ''
        if (id > 0) {
            url = `/car_color/${id}/`
        } else {
            url = '/car_color/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarFuel(id: number): Observable<CarFuel> {
        var url = ''
        if (id > 0) {
            url = `/car_fuel/${id}/`
        } else {
            url = '/car_fuel/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarTransmission(id: number): Observable<CarTransmission> {
        var url = ''
        if (id > 0) {
            url = `/car_transmission/${id}/`
        } else {
            url = '/car_transmission/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarWheelDrive(id: number): Observable<CarWheelDrive> {
        var url = ''
        if (id > 0) {
            url = `/car_wheel_drive/${id}/`
        } else {
            url = '/car_wheel_drive/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarRegion(id: number): Observable<CarRegion> {
        var url = ''
        if (id > 0) {
            url = `/car_region/${id}/`
        } else {
            url = '/car_region/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarPosts(id: number): Observable<CarPost> {
        var url = ''
        if (id > 0) {
            url = `/car_post/${id}/`
        } else {
            url = '/car_post/'
        }
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarPostsFiltered(
        id: string,
        car_condition: string,
        car_brand: string,
        car_model: string,
        car_body: string,
        car_fuel: string,
        page: number,
        user?: string
    ): Observable<CarPost> {
        var url = `/car_post/?id=${id}&car_condition=${car_condition}&car_brand=${car_brand}&car_model=${car_model}&car_body=${car_body}&car_fuel=${car_fuel}&page=${page}&user=${user}`
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    getCarImages(id: number): Observable<any> {
        var url = `/car_images/?car_post=${id}`
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }

    createCarPost(carPost: CarPostSubmit): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.auth.token
            })
        };
        return this.http.post(this.baseurl + '/car_post/', carPost, httpOptions).pipe(
            map((response: any) => {
                console.log(response);
                return response
            })
        )
    }

    uploadImages(postImage: any): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': this.auth.token
            })
        };
        return this.http.post(this.baseurl + '/car_images/', postImage, httpOptions).pipe(
            map((response: any) => {
                return response
            })
        )
    }
}