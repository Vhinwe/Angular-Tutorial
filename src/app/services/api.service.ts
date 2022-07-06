import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../models';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient){}

    getApi(endPointUrl: string): Observable<any>{
        const response = this.http.get(endPointUrl).pipe(
            map((res: any) => res)
        )
        return response;
    }
}