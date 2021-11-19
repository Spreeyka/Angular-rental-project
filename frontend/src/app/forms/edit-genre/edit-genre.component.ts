import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor
  (private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
    } 
}
