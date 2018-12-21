import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';

@Injectable({

  providedIn: 'root'

})

export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  getError(msg: string) {
    this.dialog.open(ErrorDialogComponent, {data: msg });
  }
}
