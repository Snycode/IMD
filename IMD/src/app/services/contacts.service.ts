import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Contacts } from '../models/contacts.model'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private firestore: AngularFirestore) { }

  createContact(contacts: Contacts){
    
    // return this.firestore.collection('contacts').add(contacts);
    this.firestore.collection('contacts').doc().set(Object.assign({}, contacts));
}

}
