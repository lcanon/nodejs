import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  basePath = 'apiAdvices/api/advice';

  constructor(private http: HttpClient) { }

  getAdvice() {
    return this.http.get(this.basePath + '/random');
  }
}
