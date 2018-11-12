import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(2, 'Second', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Third', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Fourth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Fifth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Sixth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Seventh', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Eighth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Ninth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
    this.contacts.push(new Contact(3, 'Tenth', ' Contact', 'Lappeenranta', '0123456789', 'first.last@gmail.com'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
