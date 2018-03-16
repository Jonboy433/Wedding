import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  { path: 'details',
    component: DetailsComponent
  }, 
  {
    path: '**',
    component: PagenotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes /*, {enableTracing: true}*/ )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
