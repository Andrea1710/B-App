import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: [],
})
export class BoosterComponent implements OnInit {
  @ViewChild('txtProgress', {static: true}) txtProgress: ElementRef;
  @Input() legenda: string = '';
  @Input() progress: number = 50;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onChange(newValue: number) {
    if (newValue >= 100) this.progress = 100;
    else if (newValue <= 0) this.progress = 0;
    else this.progress = newValue;

    this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit(this.progress);
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress += value;
    this.valueChange.emit(this.progress);
  }
}
