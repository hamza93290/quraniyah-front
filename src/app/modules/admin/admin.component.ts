import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  receivedData: boolean = false ;

  // Méthode pour gérer les données reçues de l'enfant
  onNotify(data: boolean) {
    this.receivedData = data;
    console.log('Data received from child: ', data);
  }
}
