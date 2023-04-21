import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/Device';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {


  // API created in the backend with .Net Web API
  baseURL = 'https://localhost:7041/api/Devices';

  constructor(private http: HttpClient) { }

  // Get all devices 
  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseURL);
  }

  // Delete a device
  deleteDevice(id: string): Observable<Device> {
    return this.http.delete<Device>(this.baseURL + '/' + id)
  }

  addDevice(device: Device): Observable<Device> {
    device.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Device>(this.baseURL, device);
  }

  getOneDevice(id: string): Observable<Device> {
    return this.http.get<Device>(this.baseURL + '/' + id)
  }
}
