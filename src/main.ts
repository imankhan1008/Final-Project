import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


bootstrapApplication(AppComponent,{ 
  providers: [provideRouter(routes),
              provideHttpClient()
  ]

 }) .catch((err) => console.error(err));
 
 platformBrowserDynamic()
 .bootstrapModule(AppComponent)
 .catch(err => console.error(err));