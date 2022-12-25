export class Arrays {
	static isArray(arg: any) {
		// 단순 배열인지 검사
		return arg instanceof Array;
	}

	static isEmpty(arg: any) {
		// 함수의 인자가 배열이면서 배열의 요소가 없는지 검사
		return this.isArray(arg) && !arg.length;
	}
}
