export class Length {
  value
  unit

  static YARD = 'yard'

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
    const YARD = Length.YARD
    const INCH = 'inch'
    if (this.unit === YARD) {
      if (unit === FOOT) {
        result = new Length(this.value * 3, unit)
      } else if (unit === INCH) {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === INCH) {
      if (unit === YARD) {
        result = new Length(this.value / 36, unit)
      } else if (unit === FOOT) {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === FOOT) {
      if (unit === YARD) {
        result = new Length(this.value / 3, unit)
      } else if (unit === INCH) {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
