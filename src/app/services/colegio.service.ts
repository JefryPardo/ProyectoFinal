import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioModel } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class ColegioService {

  constructor(private firestore: AngularFirestore) { }

  create_NewPadre(usuario: UsuarioModel){
    return this.firestore.collection('Colegio').add(usuario);
  }
}
