interface Button {
	paint(): void;
}

interface Factory {
	createButton(): Button;
}

class OSXFactory<T> {
	private platform = 'OSX';

	public createButton() {
		return new OSXButton();
	}
}

class AndroidFactory<T> {
	private platform = 'Android';

	public createButton() {
		return new AndroidButton();
	}

	public someMethod() {
		return new AndroidButton();
	}
}

class OSXButton {
	public paint(): void {
		console.log('SomePaintWorkOSX');
	}
}

class AndroidButton {
	public paint(): void {
		console.log('SomePaintWorkAndroid');
	}
}

export class Program {
	public static main() {
		const appearance = Program.randomAppearance();
		let factory;

		switch (appearance) {
		  case "OSX":
		  	factory = new OSXFactory<Factory>();
		    break;
		  case "Android":
			  factory = new AndroidFactory<Factory>();
		    break;
		  default:
		  	factory = new AndroidFactory<Factory>();
		}


		const button = factory.createButton();
		button.paint();

		return factory;
	}

	public static randomAppearance() {
		const appearanceArray = [];

		appearanceArray.push("OSX");
		appearanceArray.push("Android");

		return appearanceArray[Math.floor(Math.random() * appearanceArray.length)];
	}
}
