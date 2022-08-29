import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NaturalCycles'

  public eventTitle: string = localStorage.getItem('title') || ''
  public eventDate: Date | undefined

  changeTitle(newTitle: string) {
    this.eventTitle = newTitle
  }

  changeDate(newDate: Date) {
    this.eventDate = newDate
  }
}
