import { RentalService } from './rental.service';
import { GenreService } from './genre.service';
import { GameService } from './game.service';
import { EditGenreComponent } from './forms/edit-genre/edit-genre.component';
import { AddRentalComponent } from './forms/add-rental/add-rental.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { GamesDataTableComponent } from './games-data-table/games-data-table.component';
import { GenresDataTableComponent } from './genres-data-table/genres-data-table.component';
import { RentalsDataTableComponent } from './rentals-data-table/rentals-data-table.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { EditUserComponent } from './forms/edit-user/edit-user.component';
import { AddGameComponent } from './forms/add-game/add-game.component';
import { EditRentalComponent } from './forms/edit-rental/edit-rental.component';
import { EditGameComponent } from './forms/edit-game/edit-game.component';
import { AddGenreComponent } from './forms/add-genre/add-genre.component';
import { HttpClientModule }    from '@angular/common/http';
import { UserServiceService } from './user-service.service';




@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserDataTableComponent,
    GamesDataTableComponent,
    GenresDataTableComponent,
    RentalsDataTableComponent,
    RegisterComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    AddGameComponent,
    EditGameComponent,
    AddGenreComponent,
    EditGenreComponent,
    AddRentalComponent,
    EditRentalComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [UserServiceService, GameService, GenreService, RentalService],
  bootstrap: [AppComponent],

  entryComponents: [AddUserComponent, EditUserComponent, AddRentalComponent, EditRentalComponent, AddGameComponent, EditGameComponent, AddGenreComponent, EditGenreComponent]
})
export class AppModule { }
