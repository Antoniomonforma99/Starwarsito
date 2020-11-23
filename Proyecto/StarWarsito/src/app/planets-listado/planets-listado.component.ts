import { Component, OnInit } from '@angular/core';
import  { Planet } from 'src/app/planet.interface';
import { PlanetsService} from 'src/app/services/planets.service';


@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.scss']
})
export class PlanetsListadoComponent implements OnInit {

  listadoPlanetas: Planet[] = [];
  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];
  

  constructor(private planetService: PlanetsService) { }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
       this.listadoPlanetas = resp.results;
    });
 }

  ngOnInit(): void {
    this.loadPlanets();
  }

}
