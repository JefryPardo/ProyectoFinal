import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { EstudianteModel } from '../../models/estudiante.model';
import { ColegioService } from '../../services/colegio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  estudiante: EstudianteModel;
  recordarme = false;
  constructor(private auth: AuthService,
    private router: Router, private colegio: ColegioService, private student: EstudianteService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {

    this.usuario = {
      nombre : this.usuario.nombre,
      password: this.usuario.password,
      email: this.usuario.email,
      cedula: this.usuario.cedula,
      carril: "0"
    };

    if (form.invalid) { return; }

    Swal.fire({
      icon: 'info',
      text:'Espere por favor...',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    
    this.auth.nuevoUsuario(this.usuario)
      .subscribe(resp => {

        console.log(resp);
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }

          this.colegio.CrearPadre(this.usuario).subscribe(res => {
            console.log(res);
            
          })
        // this.router.navigateByUrl('/Home');

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.error.message
        });
      });
      

  }


}
