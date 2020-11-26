import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { EstudianteModel } from '../models/estudiante.model';


@Injectable({
  providedIn: 'root'
})
export class ColegioService {

  private url = 'https://colegio-bb6d0.firebaseio.com/';
  constructor(private http: HttpClient) {
  }

 
  CrearPadre(usuario: UsuarioModel){
      delete usuario.password;
      delete usuario.nombre;
      delete usuario.email;
      delete usuario.cedula;
    return this.http.post(`${this.url}/colegio/${localStorage.getItem('UID')}/carril.json`,usuario).pipe(map((resp: any) => {
      usuario.id = resp.name;
      // // resp.name = usuario.carril;
      carril: resp.name;
      return usuario;
    })); 
  }

  crearEstudiante(estudiante: EstudianteModel) {

    return this.http.post(`${this.url}/colegio/${localStorage.getItem('UID')}.json`, estudiante).pipe(map((resp: any) => {
      estudiante.id = resp.name;
      return estudiante;
    })); 
  }

  borrarEstudiante(id: string) {
    return this.http.delete(`${this.url}/estudiante/${id}.json`);
  }
}

