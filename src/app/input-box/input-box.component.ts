import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { InputBoxWordings } from '../wordings/input-box';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputBoxComponent implements OnInit {
  public title: string = localStorage.getItem("title") || "";
  public date: Date = localStorage.getItem("date") ? new Date(localStorage.getItem("date") as string) : new Date();
  wording = InputBoxWordings

  @Output() titleChangeEvent = new EventEmitter<string>();
  @Output() dateChangeEvent = new EventEmitter<Date>();

  onTitleChange($event: any) {
    this.titleChangeEvent.emit($event);
    localStorage.setItem("title", $event);
  }

  onDateChange($event: any) {
    this.dateChangeEvent.emit($event);
    localStorage.setItem("date", $event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
