import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class ApiService {
    constructor(private http: HttpClient){}

    getApi(endpointurl: string): Observable<any>{
       const response = this.http.get(endpointurl).pipe(
        map((res: any) => res)
       )
       return response;
    }

    postApi(url: string, payload: any): Observable<any> {
        const response = this.http.post(url, payload).pipe(
            map((res: any) => res)
        );
        return response;
    }
}