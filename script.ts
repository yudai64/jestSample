// TDDの練習用関数(仕様を満たす最低限の実装しかしてないです)

export const add = (...args: number[] ): number | string => {
	validateArraySize(args)

	const maxResult = 1000
	let result = 0
	args.forEach(num => result += num)
	return result > maxResult ? "too big" : result
}

export const subtract = (...args: number[]): number | string => {
	validateArraySize(args)

	const minResult = 0
	let result = args[0]
	args.slice(1).forEach(num => result -= num)
	return result < minResult ? "negative number": result
}

export const multiply = (...args: number[]): number | string => {
	validateArraySize(args)

	const maxResult = 1000;
	let result = 1;
	args.forEach(num => result *= num)
	return result > maxResult ? "big big number": result
}

export const divide = (...args: number[]): number => {
	validateArraySize(args)

	let result = args[0];
	args.slice(1).forEach(num => result /= num)
	return Math.round(result * 10) / 10
}

const validateArraySize = (array: number[]): void => {
	const maxArgsSize = 30
	if (array.length > maxArgsSize) throw Error(`Args size is up to ${maxArgsSize}`)
}
