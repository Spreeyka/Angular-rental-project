import { UserDataTableItem } from './user-data-table/user-data-table-datasource';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  selectedId:string;
  private usersUrl = 'http://localhost:8888/api/customers';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserDataTableItem[]> 
    {
      return this.http.get<UserDataTableItem[]>(this.usersUrl)      
    }

    addUser (user: UserDataTableItem): Observable<UserDataTableItem> 
    {
      return this.http.post<UserDataTableItem>(this.usersUrl, user, httpOptions)    //bez tych http options nie działa LOL
    }

    deleteUser (user: UserDataTableItem | string): Observable<UserDataTableItem> {
      const id = typeof user === 'string' ? user : user._id;
      const url = `${this.usersUrl}/${id}`;
    
      return this.http.delete<UserDataTableItem>(url, httpOptions)
    }

    updateUser (user: UserDataTableItem): Observable<any> {
      
      const url = `${this.usersUrl}/${this.selectedId}`;        //is is not allowed bo sie z jakiegos powodu wrzuca w body               
      const uss=new UserEdited(user.name,user.isPremium,user.phone);
      return this.http.put(url, uss, httpOptions)
          
    }

    getUser(id: string): Observable<UserDataTableItem> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<UserDataTableItem>(url)
     
    }

    

}
export class UserEdited {
  name: string;
  isPremium: boolean;
  phone: string;

  constructor(Name:string, IsPremium:boolean, Phone: string){
    this.name = Name;
    this.isPremium= IsPremium;
    this.phone = Phone;
  }
}
  