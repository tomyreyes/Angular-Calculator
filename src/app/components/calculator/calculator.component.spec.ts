import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CalculatorComponent } from './calculator.component'

describe('CalculatorComponent', () => {
  let component: CalculatorComponent
  let fixture: ComponentFixture<CalculatorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should add both numbers to equal 9', () => {
    component.firstNumStr = '3'
    component.secondNumStr = '6'
    component.selectedOperator = '+'
    component.calculate()
    expect(component.resultNum).toBe(9, 'After calculation')
  }),
    it('should subtract firstNum by secondNum to equal 2', () => {
      component.firstNumStr = '4'
      component.secondNumStr = '2'
      component.selectedOperator = '-'
      component.calculate()
      expect(component.resultNum).toBe(2, 'After calculation')
    })
  it('should multiply both numbers to equal 81', () => {
    component.firstNumStr = '9'
    component.secondNumStr = '9'
    component.selectedOperator = '*'
    component.calculate()
    expect(component.resultNum).toBe(81, 'After calculation')
  }),
    it('should divide firstNum by secondNum to equal 5', () => {
      component.firstNumStr = '10'
      component.secondNumStr = '2'
      component.selectedOperator = '/'
      component.calculate()
      expect(component.resultNum).toBe(5, 'After calculation')
    })
})
