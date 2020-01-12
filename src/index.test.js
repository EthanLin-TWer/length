import { Length } from './index'
import { Unit } from './unit'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, Unit.FOOT)

    expect(length.getValue()).toEqual(1)
    expect(length.getUnit()).toEqual(Unit.FOOT)
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, Unit.FOOT).parseTo(Unit.INCH)

    expect(result.getValue()).toEqual(12)
    expect(result.getUnit()).toEqual(Unit.INCH)
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, Unit.FOOT).parseTo(Unit.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.YARD)
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, Unit.YARD).parseTo(Unit.FOOT)

    expect(result.getValue()).toEqual(3)
    expect(result.getUnit()).toEqual(Unit.FOOT)
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, Unit.YARD).parseTo(Unit.INCH)

    expect(result.getValue()).toEqual(36)
    expect(result.getUnit()).toEqual(Unit.INCH)
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, Unit.YARD).parseTo(Unit.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.YARD)
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, Unit.INCH).parseTo(Unit.FOOT)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.FOOT)
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, Unit.INCH).parseTo(Unit.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.YARD)
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, Unit.INCH).parseTo(Unit.INCH)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Unit.INCH)
  })
})
