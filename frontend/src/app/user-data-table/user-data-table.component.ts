import { UserServiceService } from './../user-service.service';
import { Component, OnInit, ViewChild, Inject, Directive, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef } from '@angular/material';
import { UserDataTableDataSource, UserDataTableItem } from './user-data-table-datasource';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from "@angular/material";
import { AddUserComponent } from '../forms/add-user/add-user.component';
import { EditUserComponent } from '../forms/edit-user/edit-user.component';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<UserDataTableItem>;
  searchKey: string;
  users: UserDataTableItem[];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'name', 'isPremium', 'phone', 'actions'];

  constructor(private dialog: MatDialog, private userService: UserServiceService) {
     
  }

  ngOnInit() {
    this.userService
      .getUsers()
      .subscribe((data: UserDataTableItem[]) => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      });    
}

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
   
    const dialogRef = this.dialog.open(AddUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );    


  }

  delete(user: UserDataTableItem): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  Edit(id: string): void {
    this.userService.selectedId=id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    
    this.dialog.open(EditUserComponent, dialogConfig);       
  }
  
}

    


