
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { RentalsDataTableDataSource, RentalsDataTableItem} from './rentals-data-table-datasource';
import { EditUserComponent } from '../forms/edit-user/edit-user.component';
import { AddRentalComponent } from '../forms/add-rental/add-rental.component';
import { EditRentalComponent } from '../forms/edit-rental/edit-rental.component';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rentals-data-table',
  templateUrl: './rentals-data-table.component.html',
  styleUrls: ['./rentals-data-table.component.css']
})
export class RentalsDataTableComponent{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<RentalsDataTableItem>;
  searchKey: string;
  rentals: RentalsDataTableItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id','customerId', 'gameId', 'dateOut'];

  constructor(private dialog: MatDialog, private rentalService: RentalService) {  
  }

  ngOnInit() {
    this.rentalService
      .getRentals()
      .subscribe((data: RentalsDataTableItem[]) => {
        this.rentals = data;
        this.dataSource = new MatTableDataSource(this.rentals);
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
   
    const dialogRef = this.dialog.open(AddRentalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );    


  }
}
