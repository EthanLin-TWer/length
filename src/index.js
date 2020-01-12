import { Unit } from './unit'

export class Length {
  value
  unit

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
    let value = this.value
    let result = new Length(value, unit)
    if (this.unit === Unit.YARD) {
      if (unit === Unit.FOOT) {
        value = this.value * 3
        result = new Length(value, unit)
      } else if (unit === Unit.INCH) {
        value = this.value * 36
        result = new Length(value, unit)
      }
    }

    if (this.unit === Unit.INCH) {
      if (unit === Unit.YARD) {
        value = this.value / 36
        result = new Length(value, unit)
      } else if (unit === Unit.FOOT) {
        value = this.value / 12
        result = new Length(value, unit)
      }
    }

    if (this.unit === Unit.FOOT) {
      if (unit === Unit.YARD) {
        value = this.value / 3
        result = new Length(value, unit)
      } else if (unit === Unit.INCH) {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
