import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(
    private httpClient: HttpClient
  ) { }

  loginAndGenerateToken(value: Partial<{ email: string | null; password: string | null; }>): Observable<any> {
    console.log("dans le services");
    
    let option: any;
    return this.httpClient.post<string>(`${environment.api}/admin/generateToken`, value, {...option, responseType: 'text'} );
  }
}
