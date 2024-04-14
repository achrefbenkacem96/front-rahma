import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from '../models/Demande';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = environment.apiUrl + '/demande';
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

  getAll(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.apiUrl}/get`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Demande> {
    return this.httpClient.get<Demande>(`${this.apiUrl}/${id}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  add(userId: number, demande: Demande): Observable<Demande> {
    return this.httpClient.post<Demande>(`${this.apiUrl}/add/${userId}`, demande, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: number, demande: Demande): Observable<Demande> {
    return this.httpClient.put<Demande>(`${this.apiUrl}/${id}`, demande, { headers: this.headers })
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

  updateEtat(id: number, etatDemande: string): Observable<Demande> {
    const headers = this.generateHeaders();
    return this.httpClient.put<Demande>(`${this.apiUrl}/${id}/etat`, etatDemande, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getByUserId(userId: any): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.apiUrl}/get/${userId}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error); // You can throw a custom error or handle it as needed
  }
}
