import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map, Observable } from "rxjs";

@Injectable()
export class HttpClientService<T> {
    constructor(protected httpClient: HttpClient) {

    }

    get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url).pipe(delay(1000));
    }

    getList<T>(url: string): Observable<Array<T>> {
        return this.httpClient.get<Array<T>>(url, {
            params: new HttpParams().set("_limit","10"),
            observe: 'response'
        })
            .pipe(
                map(response => { return <T[]>response.body}),
                delay(1000));
    }

    post<T>(url: string, body: T): Observable<T> {
        // let options = {
        //     headers: new HttpHeaders({
        //         "MyCustomHeader": "MyCustomHeaderValue"
        //     })
        // }
        // return this.httpClient.post<T>(url, body).pipe(delay(1000));
        return this.httpClient.post<T>(url, body).pipe(delay(1000));
    }

    delete<T>(url: string): Observable<T> {
        return this.httpClient.delete<T>(url).pipe(delay(1000));
    }

    put<T>(url: string, body: T): Observable<T> {
        return this.httpClient.put<T>(url, body).pipe(delay(1000));
    }
}