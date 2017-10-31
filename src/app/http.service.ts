import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/delay';

@Injectable()
export class HttpService {

  private host = 'http://59f60c13ef6444001226f365.mockapi.io';

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  public get<T>(route, params?) {
    this.loading$.next(true);
    return this.http.get<T>(`${this.host}/${route}`, params)
      .finally(() => this.loading$.next(false));
  }

  public post(route, data, params?): Observable<any> {
    return this.http.post(`${this.host}/${route}`, data, params);
  }

  public put(route, data, params?): Observable<any> {
    return this.http.put(`${this.host}/${route}`, data, params);
  }

  public delete(route, params?): Observable<any> {
    return this.http.delete(`${this.host}/${route}`, params);
  }
}
