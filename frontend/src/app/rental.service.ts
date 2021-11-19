import { RentalsDataTableItem } from './rentals-data-table/rentals-data-table-datasource';
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
export class RentalService {

  private rentalsUrl = 'http://localhost:8888/api/rentals';
  constructor(private http: HttpClient) { }

  getRentals(): Observable<RentalsDataTableItem[]> 
    {
      return this.http.get<RentalsDataTableItem[]>(this.rentalsUrl)      
    }

    addRental (rental: RentalsDataTableItem): Observable<RentalsDataTableItem> 
    {
      return this.http.post<RentalsDataTableItem>(this.rentalsUrl, rental, httpOptions)    //bez tych http options nie działa
    }

    deleteRental (rental: RentalsDataTableItem | number): Observable<RentalsDataTableItem> {
      const id = typeof rental === 'number' ? rental : rental._id;
      const url = `${this.rentalsUrl}/${id}`;
    
      return this.http.delete<RentalsDataTableItem>(url, httpOptions)
    }
}
