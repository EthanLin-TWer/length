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
    let result = this
    const FOOT = 'f'
    if (this.unit === 'yard') {
      if (unit === FOOT) {
        result = new Length(this.value * 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === 'inch') {
      if (unit === 'yard') {
        result = new Length(this.value / 36, unit)
      } else if (unit === FOOT) {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === FOOT) {
      if (unit === 'yard') {
        result = new Length(this.value / 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
