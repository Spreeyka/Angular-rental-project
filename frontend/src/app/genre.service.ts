import { GenresDataTableItem } from './genres-data-table/genres-data-table-datasource';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genresUrl = 'http://localhost:8888/api/genres';
  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenresDataTableItem[]> 
    {
      return this.http.get<GenresDataTableItem[]>(this.genresUrl)      
    }

    addGenre (genre: GenresDataTableItem): Observable<GenresDataTableItem> 
    {
      return this.http.post<GenresDataTableItem>(this.genresUrl, genre, httpOptions)    //bez tych http options nie działa
    }

    deleteGenre (genre: GenresDataTableItem | number): Observable<GenresDataTableItem> {
      const id = typeof genre === 'number' ? genre : genre._id;
      const url = `${this.genresUrl}/${id}`;
    
      return this.http.delete<GenresDataTableItem>(url, httpOptions)
    }
}
