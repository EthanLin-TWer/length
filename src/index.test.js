import { Length } from './index'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, Length.FOOT)

    expect(length.getValue()).toEqual(1)
    expect(length.getUnit()).toEqual(Length.FOOT)
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, Length.FOOT).parseTo(Length.INCH)

    expect(result.getValue()).toEqual(12)
    expect(result.getUnit()).toEqual(Length.INCH)
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, Length.FOOT).parseTo(Length.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.YARD)
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, Length.YARD).parseTo(Length.FOOT)

    expect(result.getValue()).toEqual(3)
    expect(result.getUnit()).toEqual(Length.FOOT)
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, Length.YARD).parseTo(Length.INCH)

    expect(result.getValue()).toEqual(36)
    expect(result.getUnit()).toEqual(Length.INCH)
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, Length.YARD).parseTo(Length.YARD)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.YARD)
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, Length.INCH).parseTo(Length.FOOT)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.FOOT)
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, Length.INCH).parseTo('yard')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('yard')
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, Length.INCH).parseTo(Length.INCH)

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual(Length.INCH)
  })
})
