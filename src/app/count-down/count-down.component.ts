import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Input() title: string | undefined = '';
  @Input() date: Date | undefined;
  private subscription!: Subscription;

  public dateNow = new Date();
  public dDay = new Date('Aug 28 2022 00:00:00');

  public timeDifference: number | undefined;
  public secondsToDate: number | undefined;
  public minutesToDate: number | undefined;
  public hoursToDate: number | undefined;
  public daysToDate: number | undefined;


  private getTimeDifference() {
    if (this.date) {
      this.timeDifference = this.date.getTime() - new Date().getTime();
      this.setTimeUnits(this.timeDifference);
    }
  }

  private setTimeUnits(timeDifference: number) {
    this.secondsToDate = Math.floor((timeDifference) / 1000 % 60);
    this.minutesToDate = Math.floor((timeDifference) / (1000 * 60) % 60);
    this.hoursToDate = Math.floor((timeDifference) / (1000 * 60 * 60) % 24);
    this.daysToDate = Math.floor((timeDifference) / (1000 * 60 * 60 * 24));
  }

  ngOnInit() {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}