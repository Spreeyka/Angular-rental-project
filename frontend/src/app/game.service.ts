import { GamesDataTableItem } from './games-data-table/games-data-table-datasource';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  selectedId:string;
  private gamesUrl = 'http://localhost:8888/api/games';
  constructor(private http: HttpClient) { }

  getGames(): Observable<GamesDataTableItem[]> 
    {
      return this.http.get<GamesDataTableItem[]>(this.gamesUrl)      
    }

    addGame (game: GamesDataTableItem): Observable<GamesDataTableItem> 
    {
      return this.http.post<GamesDataTableItem>(this.gamesUrl, game, httpOptions)    //bez tych http options nie działa LOL
    }

    deleteGame (game: GamesDataTableItem | number): Observable<GamesDataTableItem> {
      const id = typeof game === 'number' ? game : game._id;
      const url = `${this.gamesUrl}/${id}`;
    
      return this.http.delete<GamesDataTableItem>(url, httpOptions)
    }

    updateGame (game: GamesDataTableItem): Observable<any> {
 
    const url = `${this.gamesUrl}/${this.selectedId}`;           

    const uss=new GameEdited(game.title, game.genreId, game.numberInStock, game.dailyRentalRate);
    return this.http.put(url, uss, httpOptions)
      
  }

  getGame(id: string): Observable<GamesDataTableItem> {
  const url = `${this.gamesUrl}/${id}`;
  return this.http.get<GamesDataTableItem>(url)
 
 }
}


export class GameEdited {
  title: string;
  genreId: string;
  numberInStock: number;
  dailyRentalRate: number;

  constructor(Title:string, GenreId:string, NumberInStock: number, DailyRentalRate: number){
    this.title = Title;
    this.genreId= GenreId;
    this.numberInStock = NumberInStock;
    this.dailyRentalRate = DailyRentalRate;
  }
}