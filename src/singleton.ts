export class Singleton {
	private static instance: Singleton;
	private someNumber = 0;

	private constructor() {}

	public static getInstance(): Singleton {
		if (Singleton.instance) {
			return Singleton.instance;
		}

		return Singleton.instance = new Singleton();
	}

	public increaseNumber(): void {
		this.someNumber++;
	}

	public decreaseNumber(): void {
		this.someNumber--;
	}
}
