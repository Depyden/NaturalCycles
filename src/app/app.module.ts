import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InputBoxComponent } from './input-box/input-box.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { CountDownComponent } from './count-down/count-down.component'

@NgModule({
  declarations: [AppComponent, InputBoxComponent, CountDownComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
