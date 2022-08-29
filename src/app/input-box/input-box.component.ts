import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core'
import { InputBoxWordings } from '../wordings/input-box'
import { MomentDateAdapter } from '@angular/material-moment-adapter'
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  DateAdapter,
} from '@angular/material/core'

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'DD',
    monthYearA11yLabel: 'YYYY-MM',
  },
}

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class InputBoxComponent implements OnInit {
  public title: string = localStorage.getItem('title') || ''
  public date: Date | undefined = localStorage.getItem('date')
    ? new Date(localStorage.getItem('date') as string)
    : undefined
  wording = InputBoxWordings

  @Output() titleChangeEvent = new EventEmitter<string>()
  @Output() dateChangeEvent = new EventEmitter<Date>()

  onTitleChange($event: any) {
    this.titleChangeEvent.emit($event)
    localStorage.setItem('title', $event)
  }

  onDateChange($event: any) {
    if ($event) {
      const date = $event._isAMomentObject ? $event._d : $event
      this.dateChangeEvent.emit(date)
      localStorage.setItem('date', date)
    } else {
      this.dateChangeEvent.emit(undefined)
      localStorage.removeItem('date')
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
