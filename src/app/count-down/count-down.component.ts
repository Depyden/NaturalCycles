import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  ViewChild,
  AfterViewChecked,
} from '@angular/core'
import { Subscription, interval } from 'rxjs'
import { CountDownWordings } from '../wordings/count-down'
import { setElementStyles } from './utils/count-down-utils'

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Input() title: string | undefined = ''
  @Input() date: Date | undefined

  wording = CountDownWordings

  private subscription!: Subscription
  public dateNow = new Date()

  @ViewChild('titleElement', { static: true }) titleDiv: ElementRef | undefined

  @ViewChild('countdown', { static: false }) countdownDiv:
    | ElementRef
    | undefined

  public timeDifference: number | undefined
  public secondsToDate: number | undefined
  public minutesToDate: number | undefined
  public hoursToDate: number | undefined
  public daysToDate: number | undefined

  public titleFontSize: string | undefined
  public countdownFontSize: number | undefined

  private getTimeDifference() {
    if (this.date) {
      this.timeDifference = this.date.getTime() - new Date().getTime()
      this.setTimeUnits(this.timeDifference)
    }
  }

  private setTimeUnits(timeDifference: number) {
    this.secondsToDate = Math.floor((timeDifference / 1000) % 60)
    this.minutesToDate = Math.floor((timeDifference / (1000 * 60)) % 60)
    this.hoursToDate = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
    this.daysToDate = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference()
    })
  }

  ngAfterViewChecked() {
    setElementStyles(this.titleDiv as ElementRef)
    setElementStyles(this.countdownDiv as ElementRef)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
