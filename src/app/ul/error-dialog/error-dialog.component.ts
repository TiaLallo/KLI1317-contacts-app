import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  msg: any;

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data) {

    this.msg = this.data;

  }

  ngOnInit() {

  }
}
