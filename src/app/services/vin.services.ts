import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VinCheck } from 'src/app/interfaces/interfaces';

@Injectable({ providedIn: 'root' })

export class VinCheckService{
    baseurl = 'http://localhost:8000/api/v1/vin-check/'
    constructor(
        private http: HttpClient,
        private auth: AuthService
    ){}
    
    httpOptions = {}

    getToken(){
        if (this.auth.token != null){
            this.httpOptions = {
                headers: new HttpHeaders({
                    Authorization: this.auth.token
                })
            }
            return this.httpOptions
        }
        else{
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }
            return this.httpOptions
        }
    }
    

    getVinShortReport(formData: VinCheck): Observable<any> {
        var url = `vin-check/`
        return this.http.post(this.baseurl + url, formData, this.getToken())
            .pipe(map((response: any) => {
                return response
            }))
    }

    getLatestChecks(): Observable<any> {
        var url = `vin-check/?distinct=true`
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            }))
    }
}