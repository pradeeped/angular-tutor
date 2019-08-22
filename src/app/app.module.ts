import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { LeftfixedComponent } from './leftfixed/leftfixed.component';
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { TregisterFormComponent } from './tutor-register/tregister-form/tregister-form.component';
import { VOtpComponent } from './tutor-register/tregister-form/v-otp/v-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    LeftfixedComponent,
    TutorRegisterComponent,
    TregisterFormComponent,
    VOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
