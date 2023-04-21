import { Component, OnInit } from '@angular/core';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  
  toggleFileSelection() {
    console.log("TODO");
  }
}
