import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eleves } from '@core/model/Eleves';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getEleves(): Observable<Eleves[]> {
    return this.httpClient.get<Eleves[]>(`${environment.api}/eleve/get`);
  }

  registerUser(elevesData: Eleves): Observable<Eleves> {
    console.log(elevesData);
    
    return this.httpClient.post<Eleves>(`${environment.api}/eleve/save`, elevesData);
  }
}
