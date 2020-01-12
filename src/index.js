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

  as(targetUnit) {
    return new Length(this._valueIn(targetUnit), targetUnit)
  }

  _valueIn(unit) {
    if (this.unit === Unit.YARD) {
      if (unit === Unit.FOOT) {
        return this.value * 3
      }

      if (unit === Unit.INCH) {
        return this.value * 36
      }
    }

    if (this.unit === Unit.INCH) {
      if (unit === Unit.YARD) {
        return this.value / 36
      }
      if (unit === Unit.FOOT) {
        return this.value / 12
      }
    }

    if (this.unit === Unit.FOOT) {
      if (unit === Unit.YARD) {
        return this.value / 3
      }
      if (unit === Unit.INCH) {
        return this.value * 12
      }
    }

    return this.value
  }
}
