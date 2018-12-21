import {Observable} from 'rxjs';
import {Contact} from '../contact';

export interface IContactProvider {
  create(contact: Contact): Observable<Contact>;
  delete(contact: Contact): Observable<any>;
  get(): Observable<Contact[]>;
  edit(contact: Contact): Observable<Contact>;
  getById(id: string): Observable<Contact>;
}
