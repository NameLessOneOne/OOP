export class Singleton {
	private static _instance: Singleton = new Singleton();

	private _someNumber = 0;

	private constructor() {
		// lazy initialization
		if (Singleton._instance) {
			return Singleton._instance;
		}

		Singleton._instance = this;
	}

	public static getInstance(): Singleton {
		return Singleton._instance;
	}

	public increaseNumber(): void {
		this._someNumber++;
	}

	public decreaseNumber(): void {
		this._someNumber++;
	}

	public setNumber(number: number): void {
		this._someNumber = number;
	}

	public getNumber(): number {
		return this._someNumber;
	}
}