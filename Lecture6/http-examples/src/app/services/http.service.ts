import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = 'https://postcodes.io';

  constructor(private httpClient: HttpClient) { }

  postcodeAutocomplete(search: string): Observable<string[]> {
    return this.httpClient
      .get<{ status: number, result: string[] }>(
        `${this.url}/postcodes/${search}/autocomplete`)
      .pipe(
        retry(3),
        catchError(this._handleError),
        map(({ result }) => result));
  }

  fullResponseExample(search) {
    return this.httpClient
      .get<any>(
        `${this.url}/postcodes/${search}/autocomplete`,
        { observe: 'response' })
      .pipe(
        catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse) {
    console.log(err);
    return throwError(err.message);
  }
}
