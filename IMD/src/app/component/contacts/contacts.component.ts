import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts.service';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private _contactsService: ContactsService) {

  }
  ngOnInit() {

      this.loginForm = this.fb.group({
          
          name: [null, [Validators.required, Validators.maxLength(8)]],
          phone: [null, [Validators.required, Validators.maxLength(8)]],
          email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          address: [null, [Validators.required, Validators.minLength(10)]]

      })
  }

  loginUser() {
     const contacts = new Contacts();
     contacts.nombres = this.loginForm.value.name;
     contacts.telefono = this.loginForm.value.phone;
     contacts.correo = this.loginForm.value.email;
     contacts.direccion = this.loginForm.value.address;

     this._contactsService.createContact(contacts);
      
  }
  
  
 
}


