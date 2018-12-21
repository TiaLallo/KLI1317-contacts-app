import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../ul/toolbar/toolbarserv/toolbar.service';
import {ToolbarOptions} from '../../ul/toolbar/toolbarserv/toolbar-options';
import {DialogService} from '../../ul/dialog.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  values = '';
  p: any;

  constructor(private contactService: ContactService, private router: Router, private  toolbar: ToolbarService,
              private errorService: DialogService) {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    });
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    this.loadContacts();
  }

  onContactDelete(contact: Contact) {
    this.loadContacts();
  }

  onContactCreate(): void {
    console.log('!');
    this.router.navigate(['/contacts/new']);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    }, error1 => {
      this.errorService.getError('Service not available');
    });
  }
}
