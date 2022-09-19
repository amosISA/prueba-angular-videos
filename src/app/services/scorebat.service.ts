import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScorebatResponse } from '../interfaces/scorebat.response.interface';

@Injectable({
  providedIn: 'root'
})
export class ScorebatService {

  private SCOREBAT: string = 'https://www.scorebat.com/video-api/v3/';

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<ScorebatResponse> {
    return this.http.get<ScorebatResponse>(this.SCOREBAT);
  }
}
