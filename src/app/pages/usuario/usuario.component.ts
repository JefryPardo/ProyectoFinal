import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';

import { EstudianteModel } from '../../models/estudiante.model';

import { ColegioService } from '../../services/colegio.service';
import { map } from 'rxjs/operators';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  estudiante : EstudianteModel;
  usuario: UsuarioModel;
  datas: any;
  nombre: string;
  cedula: string;
  celular: string;
  lista = [
    'Preescolar',
    'Primaria',
    'bachiller'
  ];
  seleccionado: string;
  p1 = false;
  p2 = false;
  p3 = false;
  constructor(private crud: ColegioService) { }

  ngOnInit(): void {
    
  }

  crearEstudiante(){
    let estudiante = {
      nombre: this.nombre,
      cedula: this.cedula,
      celular: this.celular,
      grado: this.seleccionado
    }
    this.crud.crearEstudiante(estudiante).subscribe(res=>{
      console.log(res);
      
    })
  }

}

