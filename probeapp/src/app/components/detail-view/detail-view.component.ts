import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/models/Device';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit{

  @Input() device: Device
  failsafe: string;
  temp: string;
  einbaupos: string;
  inch19: string;
  terminalExist: string;
  extraBedingung: string;



  constructor(private route: ActivatedRoute, private devicesService: DevicesService ) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.devicesService.getOneDevice(this.route.snapshot.params['id'])
    .subscribe(response => {
      this.device = response;
      if (this.device.failsafe) this.failsafe = 'Ja' ;else this.failsafe ='Nein'
    this.temp = this.device.tempMin.toString() + ' - ' + this.device.tempMax.toString();
    this.einbaupos = this.device.installationPosition;
    this.inch19 = this.device.insertInto19InchCabinet ? 'Ja': 'Nein';
    this.terminalExist = this.device.terminalElement ? 'Ja': 'Nein';
    this.extraBedingung = this.device.advancedEnvironmentalConditions ? 'Ja': 'Nein';
    });
    
  }
}
