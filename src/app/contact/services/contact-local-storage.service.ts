import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactProvider} from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorageKey = 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }

    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
    return of (this.contacts);
  }

  delete(contact: Contact): Observable<any> {
    console.log(contact.id);
    
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
    return of(contact);
  }

  create(contact: Contact): Observable<Contact> {
    let lastIndex = 1;
    if (this.contacts.length > 0) {
      lastIndex = this.contacts[this.contacts.length - 1].id;
      lastIndex = lastIndex + 1;
    }
    contact.id = lastIndex;
    this.contacts.push(contact);
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));

    return of (contact);
  }


  edit(contact: Contact): Observable<Contact> {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(i);
      if (this.contacts[i].id === contact.id) {
        this.contacts[i] = contact;
      }
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));

    return of (contact);
  }


  getById(id: string): Observable<Contact> {
    for (const item of this.contacts) {
      if (item.id === Number(id)) {
        const contactCopy = Object.assign({}, item);
        return of(contactCopy);
      }
    }
  }
}
