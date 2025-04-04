import { Component } from '@angular/core';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.scss'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})

export class ChatButtonComponent {
  isChatOpen = false;
  message = '';
  translatedMessage: string[] = []; // holds array for *ngFor
  showPopup = false; // Controls modal visibility

  signLanguageMap: { [key: string]: string } = {
    'a': 'assets/a.png', 'b': 'assets/b.png', 'c': 'assets/c.png',
    'd': 'assets/d.png', 'e': 'assets/e.png', 'f': 'assets/f.png',
    'g': 'assets/g.png', 'h': 'assets/h.png', 'i': 'assets/i.png',
    'j': 'assets/j.png', 'k': 'assets/k.png', 'l': 'assets/l.png',
    'm': 'assets/m.png', 'n': 'assets/n.png', 'o': 'assets/o.png',
    'p': 'assets/p.png', 'q': 'assets/q.png', 'r': 'assets/r.png',
    's': 'assets/s.png', 't': 'assets/t.png', 'u': 'assets/u.png',
    'v': 'assets/v.png', 'w': 'assets/w.png', 'x': 'assets/x.png',
    'y': 'assets/y.png', 'z': 'assets/z.png'
  };
  
  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.message.trim()) {
      this.translatedMessage = this.translateToSignLanguage(this.message);
      console.log('Translated Message:', this.translatedMessage); //  Debugging Line
      this.showPopup = true; // Show modal
      this.message = ''; // Clear input after sending
    }
  }

  closePopup() {
    this.showPopup = false;
  }

  translateToSignLanguage(text: string): string[] {
    return text
      .toLowerCase()
      .split('')
      .map(char => (char === ' ' ? 'BREAK_LINE' : this.signLanguageMap[char] || ''));
  }

}

