export namespace Mediator {
	export interface ISender {
		send: (person: Person) => void;
	}

	export interface IPerson {
		message: string;
		send: (message: string) => void;
		receive: (name: string) => void;
	}

	export class Sender implements ISender {
		public send(person: Person): void {
			person.receive(person.name);
			console.log(`Person ${person.name} says: ${person.message}`);
		}
	}

	export class Person implements IPerson {
		message = '';
		constructor(private mediator: ISender, public name: string) {}

		public send(message: string): void {
			this.message = message;
			this.mediator.send(this);
		}

		public receive(name: string): void {
			console.log(`Received message from ${name}`);
		}
	}

}
