import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactUrl = 'https://snfbackendfinal.sumagodemo.com/contact'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  createFormData(formData: any): Observable<any> {
    return this.http.post(`${this.contactUrl}/contact-data`, formData);
  }
}
