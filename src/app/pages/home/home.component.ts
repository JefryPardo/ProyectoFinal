import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { EstudianteService } from '../../services/estudiante.service';
import { EstudianteModel } from '../../models/estudiante.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  ventana = false;

  constructor(private usu: EstudianteService,
    private router: Router) { }

  ngOnInit(): void {
    this.Usuario();
  }

private Usuario() {
  if (localStorage.getItem('email') === "admin@admin.com") {
    this.ventana = true;
    console.log('colegio');
    
  }else{
    this.ventana = false;
    console.log('usuario');
    
  }
  return this.ventana;
}

}
