import { add, subtract, multiply, divide } from '../script';

// ■ add関数のTODO
// 3と10を渡すと13を返す
// 3と10と3を渡すと16を返す
// 999と1を渡すと1000を返す
// 999と2を渡すと「too big」と文字列が返る
// 30個の引数を渡してもとエラーにならない
// 31個の引数を渡すとエラーになる

describe("add", () => {
  it("3と10を渡すと13を返す", () => {
    expect(add(3, 10)).toBe(13)
  })

  it("3と10を渡すと13を返す", () => {
    expect(add(3, 10)).toBe(13)
  })

  it("3と10と3を渡すと16を返す", () => {
    expect(add(3, 10, 3)).toBe(16)
  })

  it("999と1を渡すと1000を返す", () => {
    expect(add(999, 1)).toBe(1000)
  })

  it("999と2を渡すと「too big」と文字列が返る", () => {
    expect(add(999, 2)).toBe("too big")
  })

  it("30個の引数を渡してもとエラーにならない", () => {
    const args = [...Array(30)].map((_, i) => i)
    expect(() => add(...args)).not.toThrow("Args size is up to 30")
  })

  it("31個の引数を渡すとエラーになる", () => {
    const args = [...Array(31)].map((_, i) => i)
    expect(() => add(...args)).toThrow("Args size is up to 30")
  })
})

// ■ subtract関数のTODO
// 10と3を渡すと7を返す
// 10と3と3を渡すと4を返す
// 10と10を渡すと0を返す
// 10と11を渡すと「negative number」と文字列が返る
// 30個の引数を渡してもとエラーにならない
// 31個の引数を渡すとエラーになる

describe("subtract", () => {
  it("10と3を渡すと7を返す", () => {
    expect(subtract(10, 3)).toBe(7)
  })

  it("10と3と3を渡すと4を返す", () => {
    expect(subtract(10, 3, 3)).toBe(4)
  })

  it("10と10を渡すと0を返す", () => {
    expect(subtract(10, 10)).toBe(0)
  })

  it("10と11を渡すと「negative number」と文字列が返る", () => {
    expect(subtract(10, 11)).toBe("negative number")
  })

  it("30個の引数を渡してもとエラーにならない", () => {
    const args = [...Array(30)].map((_, i) => i)
    expect(() => subtract(...args)).not.toThrow("Args size is up to 30")
  })

  it("31個の引数を渡すとエラーになる", () => {
    const args = [...Array(31)].map((_, i) => i)
    expect(() => subtract(...args)).toThrow("Args size is up to 30")
  })
})

// ■ multiply関数のTODO
// 3と10を渡すと30を返す
// 3と10と3を渡すと90を返す
// 1と1000を渡すと1000を返す
// 1と1001を渡すと「big big number」と文字列が返る
// 30個の引数を渡してもとエラーにならない
// 31個の引数を渡すとエラーになる
describe("multiply", () => {
  it("3と10を渡すと30を返す", () => {
    expect(multiply(3, 10)).toBe(30)
  })

  it("3と10と3を渡すと90を返す", () => {
    expect(multiply(3, 10, 3)).toBe(90)
  })

  it("1と1000を渡すと1000を返す", () => {
    expect(multiply(1, 1000)).toBe(1000)
  })

  it("1と1001を渡すと「big big number」と文字列が返る", () => {
    expect(multiply(1, 1001)).toBe("big big number")
  })

  it("30個の引数を渡してもとエラーにならない", () => {
    const args = [...Array(30)].map((_, i) => i)
    expect(() => multiply(...args)).not.toThrow("Args size is up to 30")
  })

  it("31個の引数を渡すとエラーになる", () => {
    const args = [...Array(31)].map((_, i) => i)
    expect(() => multiply(...args)).toThrow("Args size is up to 30")
  })
})

// ■ divide関数のTODO
// 100と10を渡すと10を返す
// 100と2と5を渡すと10を返す
// 10と3を渡すと3.3を返す
// 20と3を渡すと6.7を返す
// 30個の引数を渡してもとエラーにならない
// 31個の引数を渡すとエラーになる
describe("divide", () => {
  it("100と10を渡すと10を返す", () => {
    expect(divide(100, 10)).toBe(10)
  })

  it("100と2と5を渡すと10を返す", () => {
    expect(divide(100, 2, 5)).toBe(10)
  })

  it("10と3を渡すと3.3を返す", () => {
    expect(divide(10, 3)).toBe(3.3)
  })

  it("20と3を渡すと6.7を返す", () => {
    expect(divide(20, 3)).toBe(6.7)
  })

  it("30個の引数を渡してもとエラーにならない", () => {
    const args = [...Array(30)].map((_, i) => i)
    expect(() => divide(...args)).not.toThrow("Args size is up to 30")
  })

  it("31個の引数を渡すとエラーになる", () => {
    const args = [...Array(31)].map((_, i) => i)
    expect(() => divide(...args)).toThrow("Args size is up to 30")
  })
})