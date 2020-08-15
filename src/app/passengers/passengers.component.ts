import { Component, OnInit } from '@angular/core';
import {PassengerService} from '../services/passengerService';
import {Passenger} from '../models/passenger';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  passenger: Passenger;
  result;
  constructor(private passengerService:PassengerService) { 
    this.passenger = new Passenger();
  }
  insertPassenger(){
    this.passengerService.postPassengers(this.passenger).subscribe((data)=>{
      this.result = data;
    }
    )
  }

  ngOnInit(): void {
  }

}
