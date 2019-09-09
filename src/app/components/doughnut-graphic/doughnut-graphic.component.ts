import {Component, OnInit, Input} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-doughnut-graphic',
  templateUrl: './doughnut-graphic.component.html',
  styles: [],
})
export class DoughnutGraphicComponent implements OnInit {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  @Input() public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
