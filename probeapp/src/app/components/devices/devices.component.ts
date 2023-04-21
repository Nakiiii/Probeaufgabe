import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/Device';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit{

  devices: Device[] = []
  
  constructor(private devicesService: DevicesService){}

  ngOnInit(): void {
    this.getAllDevices();
  }

  getAllDevices() {
    this.devicesService.getAllDevices()
    .subscribe(
      response => (
        this.devices = response
      )
    )
  }


}
