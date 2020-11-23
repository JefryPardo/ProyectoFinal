import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioModel } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: AngularFirestore) {
  }
  
  read_Student(){
    return this.firestore.collection('estudiante').snapshotChanges();
  }

  create_NewStudent(usuario: UsuarioModel){
    return this.firestore.collection('Colegio').add(usuario);
  }

}
