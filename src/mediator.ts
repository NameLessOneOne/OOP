export class Mediator {
	public send(name: string, message: string, receive: (name: string) => void) {
		receive(name);
		console.log(`Person ${name} says: ${message}`);
	}
}

export class Person {
	private mediator: Mediator;
	name: string;

	constructor(mediator: Mediator, name: string) {
		this.mediator = mediator;
		this.name = name;
	}

	public send(message: string) {
		this.mediator.send(this.name, message, this.receive);
	}

	private receive(name: string) {
		console.log(`Received message from ${name}`);
	}
}
