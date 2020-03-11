import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlogPost, Category } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})

export class BlogService{
    baseurl = 'http://localhost:8000/api/v1/blog'
    constructor(private auth: AuthService, private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({
            Authorization: this.auth.token
        })
    }

    getBlogPosts(page:number, category:number, search:string): Observable<BlogPost[]>{
        var url = ''
        if(category > 0){
            url = `/blog/?category=${category}&page=${page}&search=${search}`
        }
        else{
            url = `/blog/?page=${page}&search=${search}`
        }
        return this.http.get(this.baseurl + url)
        .pipe(map((response: any) => {
            return response
        }))
    }

    getBlogPostByID(id:number):Observable<BlogPost>{
        return this.http.get(this.baseurl + `/blog/${id}/`)
        .pipe(map((response:any) => {
            return response
        }))
    }

    insertBlogPost(formData: FormData): Observable<any>{
        return this.http.post(this.baseurl + `/blog/`, formData, this.httpOptions)
        .pipe(map((response: any) => {
            return response
        }))
    }

    searchBlogPosts(search: any): Observable<BlogPost[]>{
        return this.http.get(this.baseurl + `/blog/?search=${search}`)
        .pipe(map((response: any) => {
            return response
        }))
    }

    getCategoryByID(id:number): Observable<Category>{
        return this.http.get(this.baseurl + `/category/${id}/`)
        .pipe(map((response:any) => {
            return response
        }))
    }

    getCategories(): Observable<Category>{
        return this.http.get(this.baseurl + `/category/`)
        .pipe(map((response: any) => {
            return response
        }))
    }
}