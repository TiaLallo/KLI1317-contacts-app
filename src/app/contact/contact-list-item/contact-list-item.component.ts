import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../ul/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDelete: EventEmitter<any>;

  constructor(private contactService: ContactService, private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.contactDelete = new EventEmitter();
  }

  ngOnInit() {
  }
  removeContact() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.height = '200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.contactService.deleteContact(this.contact).subscribe(() => {
          this.snackBar.open('Contact deleted!', this.contact.firstName + '' + this.contact.lastName, {duration: 4000});
          this.contactDelete.emit(this.contact);
          this.router.navigate(['/contacts']);
        });
      }
    });
  }

  editContact() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  navigateToMap() {
    this.router.navigate(['contacts/map', {address: this.contact.address, city: this.contact.city}]);
  }
}
