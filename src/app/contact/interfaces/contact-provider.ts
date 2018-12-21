import {IContactProvider} from './i-contact-provider';
import {Contact} from '../contact';
import {Observable} from 'rxjs';

export abstract class ContactProvider implements IContactProvider {
  abstract create(contact: Contact): Observable<Contact>;
  abstract delete(contact: Contact): Observable<any>;
  abstract get(): Observable<Contact[]>;
  abstract edit(contact: Contact): Observable<Contact>;
  abstract getById(id: string): Observable<Contact>;
}
