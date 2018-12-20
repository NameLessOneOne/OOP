export namespace BridgeFactory {
	export interface Bridge {
		function1(): void;
		function2(): void;
	}

	export class Bridge1 implements Bridge {
		public function1(): void {
			console.log('Bridge1 function1');
		}

		public function2(): void {
			console.log('Bridge1 function2');
		}
	}

	export class Bridge2 implements Bridge {
		public function1(): void {
			console.log('Bridge2 function1');
		}

		public function2(): void {
			console.log('Bridge2 function2');
		}
	}

	interface AbstractBridgeI {
		callMethod1(): void;
		callMethod2(): void;
	}

	export class AbstractBridge implements AbstractBridgeI {
		public bridge: Bridge;

		constructor(bridge: Bridge) {
			this.bridge = bridge;
		}

		public callMethod1() {
			this.bridge.function1();
		}

		public callMethod2() {
			this.bridge.function2();
		}
	}
}