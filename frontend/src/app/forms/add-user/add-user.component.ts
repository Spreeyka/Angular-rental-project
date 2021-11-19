import { UserDataTableItem } from './../../user-data-table/user-data-table-datasource';
import { UserServiceService } from './../../user-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: UserDataTableItem[];


  constructor(
    private userService: UserServiceService,
    private dialogRef: MatDialogRef<AddUserComponent>
    ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(name: string, isPremium: boolean,  phone: string): void {
    name = name.trim();
    phone = phone.trim();
    if (!name) { return; }
    if (!phone) { return; }
    if (!isPremium) { return; }
    this.userService.addUser({ name, isPremium, phone } as UserDataTableItem)
      .subscribe(user => {
        this.users.push(user);
      });
  }

close() {
  this.dialogRef.close();
  }   
}
