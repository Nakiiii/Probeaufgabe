import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../models/Device';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() device: Device;
  faTrash = faTrash;

  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
  }

  // delete one device and reload page
  deleteDevice(id: string) {
    this.devicesService.deleteDevice(id)
    .subscribe(
      response => {
        window.location.reload()
      }
    )
  }

}
