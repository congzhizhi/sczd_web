import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MangentComponent } from './components/mangent/mangent.component';
import { PersonalComponent } from './components/mangent/personal/personal.component';
import { DownloadComponent } from './components/mangent/download/download.component';
import { DownupComponent } from './components/mangent/downup/downup.component';
import { DownshowComponent } from './components/mangent/downshow/downshow.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NewdownComponent } from './components/mangent/newdown/newdown.component';
import { ModalmanagementComponent } from './components/mangent/modalmanagement/modalmanagement.component';
import { ChangepasswordComponent } from './components/mangent/changepassword/changepassword.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MangentComponent,
    PersonalComponent,
    DownloadComponent,
    DownupComponent,
    DownshowComponent,
    NewdownComponent,
    ModalmanagementComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
