import { GamesDataTableItem } from './../../games-data-table/games-data-table-datasource';
import { GameService } from './../../game.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { GenresDataTableItem } from 'src/app/genres-data-table/genres-data-table-datasource';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  games: GamesDataTableItem[];
  
  constructor(
    
    private dialogRef: MatDialogRef<AddGameComponent>,
    private gameService: GameService,
    ) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames()
    .subscribe(games => this.games = games);
  }

  add(title: string, genreId: string,  numberInStock: number, dailyRentalRate: number): void {
    title = title.trim();
    genreId = genreId.trim();
    if (!title) { return; }
    if (!genreId) { return; }
    if (!numberInStock) { return; }
    if (!dailyRentalRate) { return; }
    this.gameService.addGame({ title, genreId, numberInStock, dailyRentalRate } as GamesDataTableItem) //nazwy pól się muszą zgadzać jak robisz suba
      .subscribe(game => {
        this.games.push(game);
      });
  }
close() {
  this.dialogRef.close();
  }   

}