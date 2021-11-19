import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-edit-rental',
  templateUrl: './edit-rental.component.html',
  styleUrls: ['./edit-rental.component.css']
})
export class EditRentalComponent implements OnInit {

  constructor
  (private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    } 
}