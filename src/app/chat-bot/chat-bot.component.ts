import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChatBotService } from '../services/chat-bot.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  messages!:any[];
  userInput: string = '';
  showChat: Boolean =false;

  constructor(private chatbotService: ChatBotService ) {

  }
  ngOnInit(){
    this.messages =[]
  }
  togglerChat(){
    this.showChat = !this.showChat
  }
  sendMessage(): void {
    if (this.userInput.trim() === '') return;

    this.messages.push({ isUser: true, text: this.userInput, isTyping: false });

    this.chatbotService.sendMessage(this.userInput).subscribe(response => {
      console.log("🚀 ~ ChatBotComponent ~ this.chatbotService.sendMessage ~ response:", response)
      let content =response.choices[0].message.content;
      console.log("🚀 ~ ChatBotComponent ~ this.chatbotService.sendMessage ~ content:", content)


      this.messages.push({ isUser: false, text: content, isTyping: true });

      setTimeout(() => {
        this.messages.pop(); // Remove the chatbot typing indicator after a delay
        this.messages.push({ isUser: false, text: content, isTyping: false });
      }, 1000); // Adjust the delay time as needed
    });

    this.userInput = '';
  }
}
