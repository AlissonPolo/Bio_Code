import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { PrincipalComponent } from './principal/principal.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { Error500Component } from './error500/error500.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { ListasComponent } from './listas/listas.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Error404Component,
    LoginComponent,
    Error500Component,
    DashboardComponent,
    UsuariosComponent,
    ParqueaderoComponent,
    ListasComponent,
    DispositivosComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule
   
  ],
  entryComponents: [ 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
