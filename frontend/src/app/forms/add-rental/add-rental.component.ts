import { RentalService } from './../../rental.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { RentalsDataTableItem } from 'src/app/rentals-data-table/rentals-data-table-datasource';

@Component({
  selector: 'app-add-rental',
  templateUrl: './add-rental.component.html',
  styleUrls: ['./add-rental.component.css']
})
export class AddRentalComponent implements OnInit {

  rentals: RentalsDataTableItem[];


  constructor(
    
    private dialogRef: MatDialogRef<AddRentalComponent>,
    private RentalService: RentalService,
    ) { }

  ngOnInit() {
    this.getRentals();
  }

  getRentals(): void {
    this.RentalService.getRentals()
    .subscribe(rentals => this.rentals = rentals);
  }

  add(customerId: string, gameId: string): void {
    customerId = customerId.trim();
    gameId = gameId.trim();
    if (!customerId) { return; }
    if (!gameId) { return; }
    this.RentalService.addRental({ customerId, gameId } as RentalsDataTableItem)
      .subscribe(rental => {
        this.rentals.push(rental);
      });
  }

close() {
  this.dialogRef.close();
  }   

}