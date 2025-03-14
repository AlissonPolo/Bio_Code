import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error500Component } from './error500/error500.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListasComponent } from './listas/listas.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal',component: PrincipalComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error-500', component: Error500Component },
  { path: 'dashboard/perfil', component: PerfilComponent },
  { path: 'dashboard/listas', component: ListasComponent },
  { path: 'dashboard/dispositivos', component: DispositivosComponent},
  { path: 'dashboard/parqueadero', component: ParqueaderoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
