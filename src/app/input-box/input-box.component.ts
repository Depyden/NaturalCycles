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
  minDate: Date

  @Output() titleChangeEvent = new EventEmitter<string>()
  @Output() dateChangeEvent = new EventEmitter<Date>()

  onTitleChange($event: any) {
    this.titleChangeEvent.emit($event)
    localStorage.setItem('title', $event)
  }

  onDateChange($event: any) {
    if ($event) {
      const eventDate = $event._isAMomentObject ? $event._d : $event
      if (eventDate >= new Date()) {
        this.dateChangeEvent.emit(eventDate)
        localStorage.setItem('date', eventDate)
      }
    } else {
      this.dateChangeEvent.emit(undefined)
      localStorage.removeItem('date')
    }
  }

  constructor() {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0)
    this.minDate = tomorrow
  }

  ngOnInit(): void {}
}
