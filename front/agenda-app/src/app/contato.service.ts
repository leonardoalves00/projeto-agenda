import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  save(contato: Contato) : Observable<Contato>{
    return this.http.post<Contato>(this.url, contato);
  }
}
