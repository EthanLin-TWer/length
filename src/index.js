import { Unit } from './unit'

export class Length {
  value
  unit

  static YARD = Unit.YARD
  static INCH = 'inch'
  static FOOT = 'foot'

  constructor(value, unit) {
    this.value = value
    this.unit = unit
  }

  getValue() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  parseTo(unit) {
    let result = this
    if (this.unit === Length.YARD) {
      if (unit === Length.FOOT) {
        result = new Length(this.value * 3, unit)
      } else if (unit === Length.INCH) {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === Length.INCH) {
      if (unit === Length.YARD) {
        result = new Length(this.value / 36, unit)
      } else if (unit === Length.FOOT) {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === Length.FOOT) {
      if (unit === Length.YARD) {
        result = new Length(this.value / 3, unit)
      } else if (unit === Length.INCH) {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
