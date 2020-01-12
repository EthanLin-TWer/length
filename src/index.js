export class Length {
  value
  unit

  static YARD = 'yard'
  static INCH = 'inch'

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
    const FOOT = 'f'
    if (this.unit === Length.YARD) {
      if (unit === FOOT) {
        result = new Length(this.value * 3, unit)
      } else if (unit === Length.INCH) {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === Length.INCH) {
      if (unit === Length.YARD) {
        result = new Length(this.value / 36, unit)
      } else if (unit === FOOT) {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === FOOT) {
      if (unit === Length.YARD) {
        result = new Length(this.value / 3, unit)
      } else if (unit === Length.INCH) {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
