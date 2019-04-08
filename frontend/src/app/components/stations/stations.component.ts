import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { Station } from 'src/app/models/station';
declare var M: any;
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stationsList: Station[] = [];
  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.getStations();
  }

  getStations(){
    this.stationService.getStations()
      .subscribe(res => {
        this.stationsList= res;
        console.log(res);
      });
  }
}
