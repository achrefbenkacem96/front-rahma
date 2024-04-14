import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Reclamation } from '../models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = environment.apiUrl + '/reclamation';
  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    const token = localStorage.getItem('accessToken');
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  private generateHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getAll(): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.apiUrl}/GetAll`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Reclamation> {
    return this.httpClient.get<Reclamation>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  add(userId: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.httpClient.post<Reclamation>(`${this.apiUrl}/add/${userId}`, reclamation, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: number, reclamation: Reclamation): Observable<Reclamation> {
    return this.httpClient.put<Reclamation>(`${this.apiUrl}/${id}`, reclamation, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateEtat(id: number, etatReclamation: string): Observable<Reclamation> {
    const headers = this.generateHeaders();
    return this.httpClient.put<Reclamation>(`${this.apiUrl}/${id}/etat`, etatReclamation, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getByUserId(userId: any): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>(`${this.apiUrl}/Get/${userId}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError(error); // You can throw a custom error or handle it as needed
  }
}
