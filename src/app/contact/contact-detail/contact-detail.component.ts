import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, route: ActivatedRoute, private contactService: ContactService) {
    this.contact = new Contact;
  }

  ngOnInit() {
    this.router.navigate(['/contacts/new']);
  }


  onSave(): void {
    this.contactService.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
