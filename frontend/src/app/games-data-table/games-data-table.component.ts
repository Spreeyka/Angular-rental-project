import { GameService } from './../game.service';
import { AddGameComponent } from './../forms/add-game/add-game.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { GamesDataTableItem } from './games-data-table-datasource';
import { EditGameComponent } from '../forms/edit-game/edit-game.component';


@Component({
  selector: 'app-games-data-table',
  templateUrl: './games-data-table.component.html',
  styleUrls: ['./games-data-table.component.css']
})
export class GamesDataTableComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<GamesDataTableItem>;
  searchKey: string;
  games: GamesDataTableItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'title', 'genre', 'numberInStock', 'dailyRentalRate', 'actions'];

  constructor(private dialog: MatDialog, private gameService: GameService) {  
    
  }

  ngOnInit() {
    this.gameService
      .getGames()
      .subscribe((data: GamesDataTableItem[]) => {
        this.games = data;
        this.dataSource = new MatTableDataSource(this.games);
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
   
    const dialogRef = this.dialog.open(AddGameComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );    
  }

  delete(game: GamesDataTableItem): void {
    this.games = this.games.filter(h => h !== game);
    this.gameService.deleteGame(game).subscribe();
  }

  Edit(id: string): void {
    this.gameService.selectedId=id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    
    this.dialog.open(EditGameComponent, dialogConfig);       
  }
  
}
