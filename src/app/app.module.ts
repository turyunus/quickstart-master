import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http, Response,HttpModule} from '@angular/http';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
  	HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }) 
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}