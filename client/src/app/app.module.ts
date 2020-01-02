import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// firebase para el chat o usuarios online
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


//Rutas
import { APP_ROUTING } from './app.routes';
//COMPONENTES
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
//import { HomeComponent } from './components/home/home.component';
//import { MantenaiceComponent } from './components/mantenaice/mantenaice.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatsComponent } from './components/chats/chats.component';
import { EnviarHaciaComponent } from './components/enviar-hacia/enviar-hacia.component';
import { LoginComponent } from './components/login/login.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { FirechatsComponent } from './components/firechats/firechats.component';

//servicios
import {  FirestorechatsService } from "./servicios/firestorechats.service"

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    //HomeComponent,
    //MantenaiceComponent,
    FooterComponent,
    ChatsComponent,
    EnviarHaciaComponent,
    LoginComponent,
    CiudadesComponent,
    FirechatsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase)  
  ],
  providers: [
    FirestorechatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
