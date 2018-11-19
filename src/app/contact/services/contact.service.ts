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
    this.contacts.push(new Contact(1, 'First', ' Contact', 'Lappeenranta', '050 435 8679', 'first.contact@gmail.com'));
    this.contacts.push(new Contact(2, 'Second', ' Contact', 'Kouvola', '044 253 8990', 'second.contact@gmail.com'));
    this.contacts.push(new Contact(3, 'Third', ' Contact', 'Mikkeli', '040 566 8234', 'third.contact@gmail.com'));
    this.contacts.push(new Contact(4, 'Fourth', ' Contact', 'Helsinki', '045 678 3644', 'fourth.contact@gmail.com'));
    this.contacts.push(new Contact(5, 'Fifth', ' Contact', 'Oulu', '044 567 2098', 'fifth.contact@gmail.com'));
    this.contacts.push(new Contact(6, 'Sixth', ' Contact', 'Pori', '050 323 5543', 'sixth.contact@gmail.com'));
    this.contacts.push(new Contact(7, 'Seventh', ' Contact', 'Turku', '050 671 1134', 'seventh.contact@gmail.com'));
    this.contacts.push(new Contact(8, 'Eighth', ' Contact', 'Kuopio', '040 214 4456', 'eight.contact@gmail.com'));
    this.contacts.push(new Contact(9, 'Ninth', ' Contact', 'Porvoo', '044 787 6432', 'ninth.contact@gmail.com'));
    this.contacts.push(new Contact(10, 'Tenth', ' Contact', 'Jyväskylä', '040 338 8789', 'tenth.contact@gmail.com'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  removeContact(removeId) {
    console.log(removeId + 'removing this id');

    for (let i = 0; i < this.contacts.length; i++) {
      console.log(i);

      if (this.contacts[i].id === removeId) {
        this.contacts.splice(i, 1);
      }
    }
  }

  addContact(contact: Contact) {
    const lastIndex = this.contacts[this.contacts.length - 1].id;
    contact.id = lastIndex + 1;
    this.contacts.push(contact);
  }
}
