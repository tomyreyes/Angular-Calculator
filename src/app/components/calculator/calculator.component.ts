import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  firstNumStr: String = ''
  secondNumStr: String = ''
  resultNum: Number
  selectedOperator: String = ''
  displayNum: Number = 0
  displayError: Boolean = false
  operatorError: Boolean = false
  ngOnInit() {}

  selectNum(numberStr: string) {
    if (!this.selectedOperator) {
      this.firstNumStr = this.firstNumStr + numberStr
      this.displayNum = Number(this.firstNumStr)
    } else if (this.selectedOperator) {
      this.secondNumStr = this.secondNumStr + numberStr
      this.displayNum = Number(this.secondNumStr)
    }
    this.clearResultNum()
  }

  selectOperator(operatorStr: string) {
    if (this.firstNumStr) {
      this.selectedOperator = operatorStr
      this.operatorError = false
    } else {
      this.operatorError = true
    }
  }

  calculate() {
    const firstNum: number = Number(this.firstNumStr)
    const secondNum: number = Number(this.secondNumStr)
    if (!this.firstNumStr && !this.secondNumStr) {
      this.displayError = true
      return
    }
    switch (this.selectedOperator) {
      case '+':
        this.resultNum = firstNum + secondNum
        this.displayNum = this.resultNum
        break
      case '-':
        this.resultNum = firstNum - secondNum
        this.displayNum = this.resultNum
        break

      case '*':
        this.resultNum = firstNum * secondNum
        this.displayNum = this.resultNum
        break
      case '/':
        this.resultNum = firstNum / secondNum
        this.displayNum = this.resultNum
        break
      default:
        this.displayError = true
    }
    this.displayError = false
    this.clearForNextCalculation()
  }

  clearForNextCalculation() {
    this.firstNumStr = ''
    this.secondNumStr = ''
    this.selectedOperator = ''
  }

  clearResultNum() {
    this.resultNum = 0
  }

  clearAll() {
    this.firstNumStr = ''
    this.secondNumStr = ''
    this.displayNum = 0
    this.selectedOperator = ''
    this.resultNum = null
  }
}
