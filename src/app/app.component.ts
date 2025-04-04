import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToolsComponent } from './tools/tools.component';
import { ChatButtonComponent } from './chat-button/chat-button.component';
import { GesturesComponent } from './gestures/gestures.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, WelcomeComponent, ToolsComponent, ChatButtonComponent,
    GesturesComponent, AboutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'sign';
}
