import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path: 'Home',component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'Login',component: LoginComponent},
  {path: 'Registro',component: RegistroComponent},
  {path: 'Usuario',component: UsuarioComponent},
  {path: '**' , redirectTo: 'Login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
