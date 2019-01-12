import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { CalculatorComponent } from './components/calculator/calculator.component'

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
