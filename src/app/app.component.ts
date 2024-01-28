import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component'
import { FooterComponent } from "./layouts/footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { environment } from '../environments/environment.development';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html', 
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet, 
      HeaderComponent, 
      FooterComponent, 
      DashboardComponent,
      // AngularFireModule.initializeApp(environment.firebaseConfig)
    ]
})
export class AppComponent {
  title = 'ang-blog-dasboard';
}
