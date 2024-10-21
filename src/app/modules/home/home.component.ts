import { Component, OnInit } from '@angular/core';
import { ElevesService } from '@core/services/eleves/eleves.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  
  constructor(private eleves: ElevesService) {}

  ngOnInit(){
    this.eleves.getMessages().subscribe((data) => {
      console.log(data);
      });
      
  } 



}
