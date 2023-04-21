import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Probeaufgabe - [Necati Akyazi] - [20.04.2023]';

  constructor() {}

  ngOnInit(): void {
  }

}
