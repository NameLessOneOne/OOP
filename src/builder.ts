interface CarBuilder {
	color: string;
	numberOfDoors: number;
	GetResult(): Car | null;
}

class Car {
	make: string;
	model: string;
	color: string;
	numberOfDoors: number;

	constructor(make: string, model: string, color: string, numberOfDoors: number) {
		this.make = make;
		this.model = model;
		this.color = color;
		this.numberOfDoors = numberOfDoors;
	}
}

export class FerrariBuilder implements CarBuilder {
	color: string = '';
	numberOfDoors: number = 0;

	constructor(color: string, numberOfDoors: number) {
		this.color = color;
		this.numberOfDoors = numberOfDoors;
	}

	public GetResult(): Car | null {
		switch (this.numberOfDoors) {
		  case 2:
			  return new Car("Ferrari", "488 Spider", this.color, this.numberOfDoors);
			case 5:
			  return new Car("Ferrari", "Lusso", this.color, this.numberOfDoors);
		  default:
			  return null;
		}
	}
}

class BuildSportcar {
	public construct(color: string, numberOfDoors: number): void {
		const ferrari = new FerrariBuilder(color, numberOfDoors);
		console.log('Builded Ferrari', ferrari.GetResult());
	}
}

export class CarCreator {
	public buildSportcar(): void {
		new BuildSportcar().construct('red', 2);
	}
}
