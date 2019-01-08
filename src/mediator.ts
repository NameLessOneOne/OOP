export class Mediator {
	public send(person: Person) {
		person.receive(person.name);
		console.log(`Person ${person.name} says: ${person.message}`);
	}
}

export class Person {
	message = '';
	constructor(private mediator: Mediator, public name: string) {}

	public send(message: string) {
		this.message = message;
		this.mediator.send(this);
	}

	public receive(name: string) {
		console.log(`Received message from ${name}`);
	}
}
