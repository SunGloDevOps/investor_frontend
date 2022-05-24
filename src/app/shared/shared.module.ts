import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StarterComponent } from './components/starter/starter.component';
import { MenuitemComponent } from './components/menuitem/menuitem.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputtextComponent } from './components/inputtext/inputtext.component';
import { ButtonComponent } from './components/button/button.component';
import { BackbuttonComponent } from './components/backbutton/backbutton.component';
import { WelcomeheaderComponent } from './components/welcomeheader/welcomeheader.component';
import { MobiletopnavComponent } from './components/mobiletopnav/mobiletopnav.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { SingletopnavComponent } from './components/singletopnav/singletopnav.component';
import { StatsdisplayComponent } from './components/statsdisplay/statsdisplay.component';
import { ProjectinfocardComponent } from './components/projectinfocard/projectinfocard.component';
import { IntevestmentcardComponent } from './components/intevestmentcard/intevestmentcard.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TopnavComponent,
    StarterComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MenuitemComponent,
    InputtextComponent,
    ButtonComponent,
    BackbuttonComponent,
    WelcomeheaderComponent,
    MobiletopnavComponent,
    ProjectcardComponent,
    SingletopnavComponent,
    StatsdisplayComponent,
    ProjectinfocardComponent,
    IntevestmentcardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [
    TopnavComponent,
    StarterComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MenuitemComponent,
    ReactiveFormsModule,
    InputtextComponent,
    ButtonComponent,
    BackbuttonComponent,
    WelcomeheaderComponent,
    MobiletopnavComponent,
    ProjectcardComponent,
    SingletopnavComponent,
    StatsdisplayComponent,
    ProjectinfocardComponent,
    IntevestmentcardComponent,
    ButtonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
