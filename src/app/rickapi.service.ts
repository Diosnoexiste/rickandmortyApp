import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.http.get<any>(`${environment.rick_baseUrl}character`);
  }

  getCharacter(name: string): Observable<any>{
    return this.http.get<any>(`${environment.rick_baseUrl}character?name=${name}`);
  }

  getCharacterPag(pagParam: string): Observable<any>{
    return this.http.get<any>(`${environment.rick_baseUrl}character?${pagParam}`);
  }

}
