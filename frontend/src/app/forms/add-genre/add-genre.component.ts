import { GenreService } from './../../genre.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { GenresDataTableItem } from 'src/app/genres-data-table/genres-data-table-datasource';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  genres: GenresDataTableItem[];


  constructor(
    
    private dialogRef: MatDialogRef<AddGenreComponent>,
    private genreService: GenreService,
    ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres()
    .subscribe(genres => this.genres = genres);
  }

  // add(name: string, isPremium: boolean,  phone: string): void {
  //   name = name.trim();
  //   phone = phone.trim();
  //   if (!name) { return; }
  //   if (!phone) { return; }
  //   if (!isPremium) { return; }
  //   this.genreService.addGenre({ name, isPremium, phone } as GenresDataTableItem)
  //     .subscribe(genre => {
  //       this.genres.push(genre);
  //     });
  // }

close() {
  this.dialogRef.close();
  }   

}