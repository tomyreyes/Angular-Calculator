import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { CalculatorComponent } from './components/calculator/calculator.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CalculatorComponent]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
