import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthguardService } from '../guards/authguard/authguard.service';
import { AuthService } from '../interceptor/auth/auth.service';
import { JwtModule, JwtHelperService, JwtModuleOptions } from '@auth0/angular-jwt';
import { api_home_url } from 'src/environments/environment';
import { MainlayoutComponent } from './components/layouts/mainlayout/mainlayout.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ModalcardComponent } from './components/cards/modalcard/modalcard.component';
import { ModalcontainerComponent } from './components/modals/modalcontainer/modalcontainer.component';
import { DepositWalletComponent } from './components/modals/deposit-wallet/deposit-wallet.component';
import { VerifyComponent } from './components/buttons/verify/verify.component';
import { BorderedcardComponent } from './components/cards/borderedcard/borderedcard.component';
import { LandingfooterComponent } from './components/layouts/landingfooter/landingfooter.component';
import { LandingbankComponent } from './components/pages/home/landingbank/landingbank.component';
import { LandingsolarassetComponent } from './components/pages/home/landingsolarasset/landingsolarasset.component';
import { LandingprotectComponent } from './components/pages/home/landingprotect/landingprotect.component';
import { LandingfeatureComponent } from './components/pages/home/landingfeature/landingfeature.component';
import { LandinginvestComponent } from './components/pages/home/landinginvest/landinginvest.component';
import { LandingwhyComponent } from './components/pages/home/landingwhy/landingwhy.component';
import { LandingheroComponent } from './components/pages/home/landinghero/landinghero.component';
import { LandingNavComponent } from './components/navigation/landing-nav/landing-nav.component';
import { IntevestmentcardComponent } from './components/cards/intevestmentcard/intevestmentcard.component';
import { ProjectinfocardComponent } from './components/cards/projectinfocard/projectinfocard.component';
import { StatsdisplayComponent } from './components/cards/statsdisplay/statsdisplay.component';
import { SingletopnavComponent } from './components/navigation/singletopnav/singletopnav.component';
import { ProjectcardComponent } from './components/cards/projectcard/projectcard.component';
import { MobiletopnavComponent } from './components/navigation/mobiletopnav/mobiletopnav.component';
import { WelcomeheaderComponent } from './components/navigation/welcomeheader/welcomeheader.component';
import { BackbuttonComponent } from './components/buttons/backbutton/backbutton.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { InputtextComponent } from './components/form/inputtext/inputtext.component';
import { MenuitemComponent } from './components/layouts/menuitem/menuitem.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { StarterComponent } from './components/layouts/starter/starter.component';
import { TopnavComponent } from './components/navigation/topnav/topnav.component';
import { CounterComponent } from './components/form/counter/counter.component';
import { CardComponent } from './components/cards/card/card.component';
import { GetstartedComponent } from './components/pages/home/getstarted/getstarted.component';
import { PrimarybtnoneComponent } from './components/buttons/primarybtnone/primarybtnone.component';
import { PrimarybtntwoComponent } from './components/buttons/primarybtntwo/primarybtntwo.component';
import { SecondarybtnoneComponent } from './components/buttons/secondarybtnone/secondarybtnone.component';
import { BorderedbtnoneComponent } from './components/buttons/borderedbtnone/borderedbtnone.component';
import { VerificationcardComponent } from './components/cards/verificationcard/verificationcard.component';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { TabsComponent } from './components/layouts/tabs/tabs.component';
import { TabsitemComponent } from './components/layouts/tabsitem/tabsitem.component';
import { SearchbarComponent } from './components/form/searchbar/searchbar.component';
import { InvestmodalComponent } from './components/pages/projects/modal/investmodal/investmodal.component';
import { SuccessmodalComponent } from './components/pages/projects/modal/successmodal/successmodal.component';
import { InsufficientmodalComponent } from './components/pages/projects/modal/insufficientmodal/insufficientmodal.component';
import { SecondarybtntwoComponent } from './components/buttons/secondarybtntwo/secondarybtntwo.component';
import { TransactiontableComponent } from './components/pages/wallet/transactiontable/transactiontable.component';
import { DepositbankComponent } from './components/pages/wallet/depositbank/depositbank.component';
import { InputComponent } from './components/pages/wallet/input/input.component';
import { VerifywithdrawalComponent } from './components/pages/wallet/verifywithdrawal/verifywithdrawal.component';
import { AddBankComponent } from './components/pages/wallet/add-bank/add-bank.component';
import { AddCryptoComponent } from './components/pages/wallet/add-crypto/add-crypto.component';
import { BellComponent } from './components/bell/bell.component';
import { SecondarybtnthreeComponent } from './components/buttons/secondarybtnthree/secondarybtnthree.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { CircleprogressComponent } from './components/circleprogress/circleprogress.component';
import { InvestedamountComponent } from './components/pages/investments/investedamount/investedamount.component';
import { ShareprojectComponent } from './components/modals/shareproject/shareproject.component';
import { ClipboardModule } from 'ngx-clipboard';
import {CaptchaModule} from 'primeng/captcha';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';
import { ActivitycardComponent } from './components/cards/activitycard/activitycard.component';
import { PageloaderComponent } from './components/loaders/pageloader/pageloader.component';
import { QuestiontabComponent } from './components/pages/faqs/questiontab/questiontab.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    TopnavComponent,
    StarterComponent,
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
    IntevestmentcardComponent,
    LandingNavComponent,
    LandingheroComponent,
    LandingwhyComponent,
    LandinginvestComponent,
    LandingfeatureComponent,
    LandingprotectComponent,
    LandingsolarassetComponent,
    LandingbankComponent,
    LandingfooterComponent,
    BorderedcardComponent,
    VerifyComponent,
    DepositWalletComponent,
    ModalcontainerComponent,
    ModalcardComponent,
    EmptyComponent,
    MainlayoutComponent,
    CounterComponent,
    CardComponent,
    GetstartedComponent,
    PrimarybtnoneComponent,
    PrimarybtntwoComponent,
    SecondarybtnoneComponent,
    BorderedbtnoneComponent,
    VerificationcardComponent,
    NotificationComponent,
    TabsComponent,
    TabsitemComponent,
    SearchbarComponent,
    InvestmodalComponent,
    SuccessmodalComponent,
    InsufficientmodalComponent,
    SecondarybtntwoComponent,
    TransactiontableComponent,
    DepositbankComponent,
    InputComponent,
    VerifywithdrawalComponent,
    AddBankComponent,
    AddCryptoComponent,
    BellComponent,
    SecondarybtnthreeComponent,
    ProgressbarComponent,
    CircleprogressComponent,
    InvestedamountComponent,
    ShareprojectComponent,
    ActivitycardComponent,
    PageloaderComponent,
    QuestiontabComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ClipboardModule,
    CaptchaModule,
    ProgressSpinnerModule,
    SkeletonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [api_home_url],
      },
    }),
  ],
  providers: [
    AuthguardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true},
    JwtHelperService,
  ],
  exports: [
    TopnavComponent,
    StarterComponent,
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
    HttpClientModule,
    LandingNavComponent,
    LandingheroComponent,
    LandingwhyComponent,
    LandinginvestComponent,
    LandingfeatureComponent,
    LandingprotectComponent,
    LandingsolarassetComponent,
    LandingbankComponent,
    LandingfooterComponent,
    JwtModule,
    BorderedcardComponent,
    VerifyComponent,
    DepositWalletComponent,
    ModalcontainerComponent,
    ModalcardComponent,
    EmptyComponent,
    MainlayoutComponent,
    CounterComponent,
    GetstartedComponent,
    PrimarybtnoneComponent,
    PrimarybtntwoComponent,
    SecondarybtnoneComponent,
    BorderedbtnoneComponent,
    CardComponent,
    VerificationcardComponent,
    NotificationComponent,
    TabsComponent,
    TabsitemComponent,
    SearchbarComponent,
    InvestmodalComponent,
    SuccessmodalComponent,
    InsufficientmodalComponent,
    SecondarybtntwoComponent,
    TransactiontableComponent,
    DepositbankComponent,
    InputComponent,
    VerifywithdrawalComponent,
    AddBankComponent,
    AddCryptoComponent,
    BellComponent,
    ProgressbarComponent,
    CircleprogressComponent,
    InvestedamountComponent,
    ShareprojectComponent,
    ClipboardModule,
    CaptchaModule,
    ProgressSpinnerModule,
    SkeletonModule,
    ActivitycardComponent,
    PageloaderComponent,
    QuestiontabComponent
  ]
})
export class SharedModule { }
