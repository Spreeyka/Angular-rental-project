import { GamesDataTableItem } from './../../games-data-table/games-data-table-datasource';
import { GameService } from './../../game.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  @Input() game: GamesDataTableItem;
  constructor
  (
    private dialogRef: MatDialogRef<AddUserComponent>,
    private gameService: GameService) 
    { }

  ngOnInit() {
    this.getGame();
  }

  getGame(): void {
    const id=this.gameService.selectedId;
    this.gameService.getGame(id)
      .subscribe(game => this.game = game);
      
  }

  save(): void {
    
    this.gameService.updateGame(this.game)
    .subscribe();   
  }

  close() {
    this.dialogRef.close();
    } 
    
}
