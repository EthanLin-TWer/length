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
    let result = new Length(this.value, unit)
    if (this.unit === Unit.YARD) {
      if (unit === Unit.FOOT) {
        result = new Length(this.value * 3, unit)
      } else if (unit === Unit.INCH) {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === Unit.INCH) {
      if (unit === Unit.YARD) {
        result = new Length(this.value / 36, unit)
      } else if (unit === Unit.FOOT) {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === Unit.FOOT) {
      if (unit === Unit.YARD) {
        result = new Length(this.value / 3, unit)
      } else if (unit === Unit.INCH) {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
