import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule} from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [

  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },

  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },

  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  //problème ici ? 

  { path: 'auth', component: AuthComponent },

  { path: '', component: AppareilViewComponent },

  { path: 'not-found', component: FourOFourComponent },

  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
