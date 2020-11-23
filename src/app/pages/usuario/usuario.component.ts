import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/estudiante.service';
import { EstudianteModel } from '../../models/estudiante.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

estudiante: EstudianteModel;
  datas: any;
  foros: Array<Object> = [
    { nombre: "foro1", checked: false },
    { nombre: "foro2", checked: false },
    { nombre: "foro3", checked: false },
    { nombre: "foro4", checked: false }
  ];
  constructor(private crud: UsuarioService) { }

  ngOnInit(): void {
    console.log('inicio usuario');

    this.crud.read_Student().subscribe(res => {
      // console.log(res);
      this.datas = res.map(e => {
        return {
          id: e.payload.doc.id,
          email: e.payload.doc.data()['email'],
          password: e.payload.doc.data()['password'],
          nombre: e.payload.doc.data()['nombre'],
          estudiante: e.payload.doc.data()['estudiante']
        }
      });
      console.log(this.datas);
    });
  }

}
