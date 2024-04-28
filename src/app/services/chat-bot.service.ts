import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private httpClient: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+ environment.openai_apiKey);
    //@ts-ignore
    return this.httpClient.post<any>(this.apiUrl, {
      messages: [
        {"role": "user", "content": message}
     ],
      max_tokens: 150,
       model :"gpt-3.5-turbo"
    }, { headers })
  }
}
