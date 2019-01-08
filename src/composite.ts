export namespace Composite {
	export class CarFactory {
		cars: Car[] = [];

		constructor(
			public name: string,
		) {
		}

		add(car: Car): void {
			this.cars.push(car);
		}

		remove(car: Car): boolean {
			for (let i = 0, length = this.cars.length; i < length; i++) {
				if (this.cars[i] === car) {
					this.cars.splice(i, 1);
					return true;
				}
			}

			return false;
		}

		getCarName(index: number) {
			return this.cars[index].name;
		}

		display() {
			console.log(this.name);
			for (let i = 0, length = this.cars.length; i < length; i++) {
				console.log('   ', this.getCarName(i));
			}
		}
	}


	export class Car {
		constructor(public name: string) {}
	}
}