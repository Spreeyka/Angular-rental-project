import { GenreService } from './../genre.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { GenresDataTableDataSource, GenresDataTableItem } from './genres-data-table-datasource';
import { AddGenreComponent } from '../forms/add-genre/add-genre.component';
import { EditGenreComponent } from '../forms/edit-genre/edit-genre.component';

@Component({
  selector: 'app-genres-data-table',
  templateUrl: './genres-data-table.component.html',
  styleUrls: ['./genres-data-table.component.css']
})
export class GenresDataTableComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<GenresDataTableItem>;
  searchKey: string;
  genres: GenresDataTableItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'name', 'actions'];

  constructor(private dialog: MatDialog, private genreService: GenreService) {  

  }

  ngOnInit() {
    this.genreService
      .getGenres()
      .subscribe((data: GenresDataTableItem[]) => {
        this.genres = data;
        this.dataSource = new MatTableDataSource(this.genres);
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
   
    const dialogRef = this.dialog.open(AddGenreComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );    


  }
  Edit(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    
    this.dialog.open(EditGenreComponent, dialogConfig);       
  }
}
