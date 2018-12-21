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
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {AvatarModule} from 'ngx-avatar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToolbarService} from './ul/toolbar/toolbarserv/toolbar.service';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmDialogComponent } from './ul/confirm-dialog/confirm-dialog.component';
import {ContactHttpService} from './contact/services/contact-http.service';
import {ContactProvider} from './contact/interfaces/contact-provider';
import {environment} from '../environments/environment';
import {ContactMapComponent} from './contact/contact-map/contact-map.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ErrorDialogComponent } from './ul/error-dialog/error-dialog.component';
import {DialogService} from './ul/dialog.service';

const avatarColors = ['#FFB6C1', '#2c3e50', '#310011', '#95a5a6', '#bc29b7'];

const appRoutes: Routes = [
    {path: 'contacts', component: ContactListComponent},
    {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts/map', component: ContactMapComponent},
  {path: '**', redirectTo: '/contacts'}

];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
    ConfirmDialogComponent,
    ContactMapComponent,
    SafeUrlPipe,
    ErrorDialogComponent
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
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
  ],

  providers: [ContactService,
    ToolbarService,
    ContactLocalStorageService,
    DialogService,
    ErrorDialogComponent,
    {provide: ContactProvider, useClass: environment.apiEnabled ? ContactHttpService : ContactLocalStorageService }
    ],
  entryComponents: [
    ConfirmDialogComponent,
    ErrorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
