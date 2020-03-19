import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Dealer } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class DealerService{
    baseurl = 'http://localhost:8000/api/v1/dealer/'
    constructor(
        private http: HttpClient,
        private auth: AuthService
    ) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getDealerByUser(user_id: number): Observable<Dealer> {
        var url = `dealer/?user=${user_id}`
        return this.http.get(this.baseurl + url)
            .pipe(map((response: any) => {
                return response
            })
        )
    }

    
}