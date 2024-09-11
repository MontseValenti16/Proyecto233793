import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  @Output() event = new EventEmitter<string>();

  message: string = "Este es un nuevo mensaje"

  mostrar(): void{
    console.log(this.user)
    console.log(this.message)
  }


  @Output() userCreated = new EventEmitter<IUser>();

enviar(){
  this.userCreated.emit(this.user);
  this.limpiarFormulario();  
}

limpiarFormulario() {
  this.user = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  };
}

}
