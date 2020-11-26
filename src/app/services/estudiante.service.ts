import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioModel } from '../models/usuario.model';
import { EstudianteModel } from '../models/estudiante.model';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) {
  }
  
  read_Student(){

    return this.firestore.collection("Colegio").snapshotChanges()
  }

  create_NewStudent(usuario: UsuarioModel){
    delete usuario.nombre;
    delete usuario.cedula;
    delete usuario.password;
    delete usuario.email;
    return this.firestore.collection('estudiante').doc(localStorage.getItem('email')).set(usuario);
  }


  create_NewStudents(estudiante: EstudianteModel){
    return this.firestore.collection(localStorage.getItem('email')).add(estudiante);
  }

  actualizar(estudiante: EstudianteModel){
    return this.firestore.collection('estudiante').add(estudiante);
  }

}
