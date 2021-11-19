import { LoginComponent } from './login/login.component';
import { GenresDataTableComponent } from './genres-data-table/genres-data-table.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesDataTableComponent } from './games-data-table/games-data-table.component';
import { RentalsDataTableComponent } from './rentals-data-table/rentals-data-table.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'api/users',
    component: UserDataTableComponent,
  },
  {
    path: 'api/games',
    component: GamesDataTableComponent,
  },
  {
    path: 'api/genres',
    component: GenresDataTableComponent,
  },
  {
    path: 'api/rentals',
    component: RentalsDataTableComponent,
  },
  {
    path: 'api/auth',
    component: LoginComponent,
  },
  {
    path: 'api/register',
    component: RegisterComponent,
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
