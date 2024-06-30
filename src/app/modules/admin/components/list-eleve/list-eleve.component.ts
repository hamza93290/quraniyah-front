import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Eleves } from '@core/model/Eleves';
import { ElevesService } from '@core/services/eleves/eleves.service';


@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.component.html',
  styleUrl: './list-eleve.component.scss'
})
export class ListEleveComponent implements OnInit {

  elevesData: Eleves[] = [];
  dataSource = new MatTableDataSource<Eleves>();
  displayedColumns: string[] = ['name', 'lastname', 'email', 'telephone', 'age', 'cursus'];

  constructor(
    private eleves : ElevesService
  ){}

  ngOnInit() {

    this.eleves.getEleves().subscribe({
      next: (eleve : Eleves[]) => {
        this.dataSource.data = eleve;
        console.log(eleve);
      },
      error : err => {
        console.log(err);
      }
    })

}



}
