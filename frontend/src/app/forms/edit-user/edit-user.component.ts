import { UserDataTableItem } from './../../user-data-table/user-data-table-datasource';
import { UserServiceService } from './../../user-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user: UserDataTableItem;
  constructor
  (
    private dialogRef: MatDialogRef<AddUserComponent>,
    private userService: UserServiceService,
    ) { }

  ngOnInit() {   
      this.getUser();

  }


  getUser(): void {
    const id=this.userService.selectedId;
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
      
  }

  save(): void {
    
    this.userService.updateUser(this.user)
    .subscribe();   
  }

  close() {
    this.dialogRef.close();
    } 
}
