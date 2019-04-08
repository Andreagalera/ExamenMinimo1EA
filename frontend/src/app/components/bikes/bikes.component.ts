import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { BikeService} from '../../services/bike.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Station } from 'src/app/models/station';
import { Bike } from 'src/app/models/bike';

declare var M: any;

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  station: Station;
  bikesList: Bike[] = [];
  stationId: string;
  bikeId: string;


  constructor(private activatedRouter: ActivatedRoute, private stationService: StationService, private bikeService: BikeService) {
    this.station = new Station();
    this.stationId="";
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.station._id = params['id'];
      }
      else{
        this.station._id = '';
      }
    });
    this.getBikes();
    this.getInfoStation(this.station._id);
    //this.getInfooneStationgetInfo(this.station._id);
  }

  /* getInfooneStationgetInfo(_id: string){
    this.stationService.getInfooneStationgetInfo(_id)
      .subscribe(res => {
        this.station = res;
      console.log(res);
      console.log(_id); 
      console.log(this.station);
      });
  } */


  getBikes(){
    this.bikeService.getBikes()
      .subscribe(res => {
        this.bikesList= res;
        console.log("Hola");
        console.log(res);
      });
  }

  getInfoStation(_id: string){
    this.stationService.getInfoStation(_id)
    .subscribe(res => {
      this.station = res;
    console.log(res);
    console.log(_id); 
    console.log(this.station);
    });
    this.stationId = _id;

  }

  putBikeStation(_id: string){
    this.bikeId = _id;
    console.log("Station" + this.stationId);
    console.log("Student" + this.bikeId);

    this.stationService.putBikeStation(this.stationId, this.bikeId)
    .subscribe(res => {
      M.toast({html: 'Bike guardado'});
      this.getBikes();
      this.getInfoStation(this.stationId);
    }); 
  
  }

  deleteBikeStation(_id: string){
    this.bikeId = _id;
    console.log("Station" + this.stationId);
    console.log("Student" + this.bikeId);

    this.stationService.deleteBikeStation(this.stationId, this.bikeId)
    .subscribe(res => {
      M.toast({html: 'Bike eliminado'});
      this.getBikes();
      this.getInfoStation(this.stationId);
    }); 
  
  }



}
