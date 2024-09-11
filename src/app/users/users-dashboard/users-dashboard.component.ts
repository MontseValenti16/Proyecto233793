import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = []

  selected_user:IUser = {
    id: 1,
    name: "Montse",
    username: "Valenti",
    phone: "12345678",
    website: "montse@.com"
  }

  message: string = "Hola Mundo"

  constructor(private _service: UserService){

    this._service.getAll().subscribe(
      response => this.users_list = response
    )

   }


   eventoRecibido(message: string){
    this.message = message
   }

   agregarUsuario(nuevoUsuario: IUser): void {
    nuevoUsuario.id = this.users_list.length + 1;
    this.users_list.push(nuevoUsuario);
  }



}
