export class Subject<T, E extends Error> implements Observer<T, E> {
	closed = false;
	observers: Subscriber<T, E>[] = [];

	next(data?: T): void {
		if (this.closed) {
			this.error(errorMessage.next);
			return;
		}

		this.observers.forEach((v) => v.update(data));
	}

	subscribe(update: (message: T) => void): number | null;
	subscribe(update: (message: T) => void, error: (error: E) => void): number | null;
	subscribe(update: (message: T) => void, error: (error: E) => void, complete: () => void): number | null;
	subscribe(
		update: (message: T) => void,
		error: (error: E) => void = () => console.log('An error occurred!'),
		complete: () => void = function() {}
		): number | null {
		if (this.closed) {
			this.error(errorMessage.subscribe);
			return null;
		}

		const id = Date.now();

		this.observers.push({id, update, error, complete});
		return id;
	}

	error(error: string) {
		console.log(error);
	}

	unsubscribe(id: number): void {
		this.observers = this.observers.filter((v) => {
			if (!(v.id !== id)) {
				if (v) v.complete();
			}
			return v.id !== id;
		});

		if (this.observers.length === 0) {
			this.error(errorMessage.unsubscribe)
		}
	}

	complete() {
		this.observers.forEach((v) => v.complete());
		this.observers = [];
		this.closed = true;
	}
}

export interface Observer<T, E extends Error> {
	closed: boolean;
	next(message: T): void;
	subscribe(update: (message: T) => void): number | null;
	subscribe(update: (message: T) => void, error: (error: E) => void): number | null;
	subscribe(update: (message: T) => void, error: (error: E) => void, complete: () => void): number | null;
	unsubscribe(id: number): void;
	complete(): void;
	error(error: string): void;
}

export interface Subscriber<T, E> {
	id: number;
	update(value: T | undefined): void;
	error(err: E): void;
	complete(): void;
}

enum errorMessage {
	subscribe = 'You can not subscribe because subject is completed!',
	unsubscribe = 'There is no observer with this id!',
	next = 'You can not next because subject is completed!'
}
