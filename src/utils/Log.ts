export class Log {
	// static 메서드는 인스턴스 멤버에 접근이 불가능함.
	static debug(msg: string) {
		console.debug(msg);
	}

	// 에러 메시지
	static error(error: Error) {
		console.error(error.message);
	}

	// 기본 메시지 => 참조를 로깅함.
	// 객체를 로깅할 경우 객체의 내용이 변경사항이 실시간으로 업데이트됨.
	static log(msg: string) {
		console.log(msg);
	}

	// 경고 메시지
	static warn(msg: string) {
		console.warn(msg);
	}

	// 객체를 로깅할때는 console.dir를 사용함.
	static dir(obj: object) {
		console.dir(obj);
	}

	// 몇 번 호출되었는지 로깅할때 사용함.
	static count(id: string) {
		console.count(id);
	}

	// time, timeEnd 코드 수행 시간을 확인할때 사용함
	static time(timerId: string) {
		console.time(timerId);
	}

	// time, timeEnd의 타이머 이름이 일치해야함.
	static timeEnd(timerId: string) {
		console.timeEnd(timerId);
	}
}
