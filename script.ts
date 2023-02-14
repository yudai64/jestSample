// TDDの練習用関数(仕様を満たす最低限の実装しかしてないです)

export const add = (...args: number[] ): number | string => {
	validateArraySize(args)

	const maxResult = 1000
	const result = args.reduce((acc, cur) => {
		return acc + cur
	}, 0)
	return result > maxResult ? "too big" : result
}

export const subtract = (...args: number[]): number | string => {
	validateArraySize(args)

	const minResult = 0
	const result = args.slice(1).reduce((acc, cur) => {
		return acc - cur
	}, args[0])
	return result < minResult ? "negative number": result
}

export const multiply = (...args: number[]): number | string => {
	validateArraySize(args)

	const maxResult = 1000;
	const result = args.reduce((acc, cur) => {
		return acc * cur
	}, 1)
	return result > maxResult ? "big big number": result
}

export const divide = (...args: number[]): number => {
	validateArraySize(args)

	let result = args.slice(1).reduce((acc, cur) => {
		return acc / cur
	}, args[0])
	return Math.round(result * 10) / 10
}

const validateArraySize = (array: number[]): void => {
	const maxArgsSize = 30
	if (array.length > maxArgsSize) throw Error(`Args size is up to ${maxArgsSize}`)
}
