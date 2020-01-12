import { Length } from './index'

describe('Length', () => {
  it("should 1 'foot' equals 1 'foot'", () => {
    const length = new Length(1, Length.FOOT)

    expect(length.getValue()).toEqual(1)
    expect(length.getUnit()).toEqual('f')
  })

  it("should 1 'foot' equals 12 inches", () => {
    const result = new Length(1, 'f').parseTo('inch')

    expect(result.getValue()).toEqual(12)
    expect(result.getUnit()).toEqual('inch')
  })

  it("should 3 feet equals 1 'yard'", () => {
    const result = new Length(3, 'f').parseTo('yard')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('yard')
  })

  it("should 1 'yard' equals 3 feet", () => {
    const result = new Length(1, 'yard').parseTo('f')

    expect(result.getValue()).toEqual(3)
    expect(result.getUnit()).toEqual('f')
  })

  it("should 1 'yard' equals 36 inches", () => {
    const result = new Length(1, 'yard').parseTo('inch')

    expect(result.getValue()).toEqual(36)
    expect(result.getUnit()).toEqual('inch')
  })

  it("should 1 'yard' equals 1 'yard'", () => {
    const result = new Length(1, 'yard').parseTo('yard')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('yard')
  })

  it("should 12 inches equals 1 'foot'", () => {
    const result = new Length(12, 'inch').parseTo('f')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('f')
  })

  it("should 36 inches equals 1 'yard'", () => {
    const result = new Length(36, 'inch').parseTo('yard')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('yard')
  })

  it("should 1 inch equals 1 'inch'", () => {
    const result = new Length(1, 'inch').parseTo('inch')

    expect(result.getValue()).toEqual(1)
    expect(result.getUnit()).toEqual('inch')
  })
})
