import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styles: [],
})
export class GraphicComponent implements OnInit {
  graphics = [
    {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      legenda: 'El pan se come con',
    },
    {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      legenda: 'Entrevistados',
    },
    {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      legenda: '¿Le dan gases los frijoles?',
    },
    {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      legenda: '¿Le importa que le den gases?',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
