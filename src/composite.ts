export namespace Composite {
	export interface Car {
		name: string;
		display: () => void;
	}

	export class CarBrand implements Car {
		carsList: Car[] = [];

		constructor(public name: string) {}

		add(car: Car): void {
			this.carsList.push(car);
		}

		display(): void {
			console.log(`Brand ${this.name}`);
			for (let i = 0, length = this.carsList.length; i < length; i++) {
				this.carsList[i].display();
			}
		}
	}


	export class CarModel implements Car {
		constructor(public name: string) {}

		display(): void {
			console.log(`  Model ${this.name}`);
		}
	}
}
