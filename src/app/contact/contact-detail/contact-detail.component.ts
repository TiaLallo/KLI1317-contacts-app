import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../ul/toolbar/toolbarserv/toolbar.service';
import {ToolbarOptions} from '../../ul/toolbar/toolbarserv/toolbar-options';
import {MatSnackBar} from '@angular/material';
import {DialogService} from '../../ul/dialog.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService,
              private toolbar: ToolbarService, private snackBar: MatSnackBar, private dialogService: DialogService) {
    this.contact = new Contact();
  }

  ngOnInit() {
      //  contact by id
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit Contact'));
      const contactId = this.route.snapshot.paramMap.get('id');

      this.contactService.getContactById(contactId).subscribe(result => {
        this.contact = result;
      });
  }

  onSave(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
      if (contactId) {
        this.contactService.editContact(this.contact).subscribe(result => {
          this.router.navigate(['/contacts']);
          return this.contact = result;
        });
        this.snackBar.open('Edited contact!', 'OK', {duration: 4000});
        this.router.navigate(['/contacts']);

      } else {
        this.contactService.addContact(this.contact).subscribe(result => {
          this.snackBar.open('Created contact!', 'OK', {duration: 4000});
          this.router.navigate(['/contacts']);
        });

      }
    }
}
