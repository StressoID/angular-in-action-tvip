import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private host = 'http://59f60c13ef6444001226f365.mockapi.io/';
  constructor(private http: HttpClient) { }

  public get(route, params?): Observable<any> {
    return this.http.get(`${this.host}/${route}`, params);
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
