import { Component, OnInit } from '@angular/core';
import { InputType } from '../models/inputType';
import { InputBoxWordings } from '../wordings/input-box';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  public name: string | undefined;
  public date: Date | undefined;
  wording = InputBoxWordings


 onTyping($event: any){
    console.log($event)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
