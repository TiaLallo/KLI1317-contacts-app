import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import { ToolbarComponent } from './ul/toolbar/toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {AvatarModule} from 'ngx-avatar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';

const avatarColors = ['#FFB6C1', '#2c3e50', '#310011', '#95a5a6', '#bc29b7'];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    AvatarModule.forRoot({
      colors: avatarColors
    }),
    FlexLayoutModule,
    NgxPaginationModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
