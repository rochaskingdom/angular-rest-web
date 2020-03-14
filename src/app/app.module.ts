import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component'; // Requisicoes AJAX
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const appRouters: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
