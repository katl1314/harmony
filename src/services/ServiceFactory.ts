import { AxiosService } from './AxiosService';

// Factory pattern : 객체를 생성하기 위한 인터페이스를 정의하는데, 어떤 클래스의 인스턴스를 만들어지는 서브클래스에서 결정함.
// 즉 팩토리 패턴을 이용하면 인스턴스 생성을 메인 클래스가 아닌 서브 클래스에서 결정함.
export class ServiceFactory {
	static get AxiosService() {
		return new AxiosService();
	}
}
