interface Button {
	Paint(): void;
}

interface Factory {
	CreateButton(): Button;
}

class OSXFactory<T> {
	public CreateButton() {
		return new OSXButton();
	}
}

class AndroidFactory<T> {
	public CreateButton() {
		return new AndroidButton();
	}

	public Igor() {
		return new AndroidButton();
	}
}

class OSXButton {
	public Paint(): void {
		console.log('SomePaintWorkOSX');
	}
}

class AndroidButton {
	public Paint(): void {
		console.log('SomePaintWorkAndroid');
	}
}

export class Program {
	public static Main() {
		const appearance = Program.randomAppearance();
		console.log('appearance', appearance);

		let factory;

		switch (appearance) {
		  case "OSX":
		  	factory = new OSXFactory<Factory>();
		    break;
		  case "Windows":
			  factory = new AndroidFactory<Factory>();
		    break;
		  default:
		  	throw new Error("No such operating system");
		}


		const button = factory.CreateButton();
		button.Paint();

		return factory;
	}

	public static randomAppearance() {
		const appearanceArray = [];

		appearanceArray.push("OSX");
		appearanceArray.push("Windows");
		appearanceArray.push("error");

		return appearanceArray[Math.floor(Math.random() * appearanceArray.length)];
	}
}
