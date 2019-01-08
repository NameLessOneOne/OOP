export namespace Decorator {
	export function log(target: any, key: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		descriptor.value = function () {
			console.log(`${arguments[0]} opened`);
			console.log(`${arguments[1]} opened`);

			return originalMethod.apply(this, arguments);
		};

		return descriptor;
	}

	export function bigHome(roof?: string) {
		return function <T extends { new(...args: any[]): {} }>(constructor: T) {
			return class extends constructor {
				largeWindows = true;
				name = 'BigHome';
				roof = roof ? roof : '';

				secondFloorLightOn() {
					console.log('Second floor light is on');
				}
			}
		}
	}
}