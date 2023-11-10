import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes=[ // enrutamiento
  {
    path:'intro',
    component: IntroComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'proyect',
    component: ProyectComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProyectComponent,
    ContactComponent,
    PageNotFoundComponent,
    IntroComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // especifica el sistema de enrutador principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

