import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter();


  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
  }

  onClick() {
    document.getElementById('file')?.addEventListener('change', this.dataSelect, false);
  }

  dataSelect() {
    
  }


}
