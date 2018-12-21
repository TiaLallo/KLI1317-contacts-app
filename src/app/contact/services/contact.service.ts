import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {Observable} from 'rxjs';
import {ContactHttpService} from './contact-http.service';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor(private contactLocalStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
  }

  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.contactLocalStorage.create(contact);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.contactLocalStorage.edit(contact);
}
  getContactById(id: string): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
}
