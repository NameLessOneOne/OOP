export class Subject<T> {
	observers: Observer<T>[] = [];

	next(data?: T) {
		for (let i = 0; i < this.observers.length; i++) {
			const item = this.observers[i];
			item.next(data as any);
		}
	}

	subscribe(observer: (value: T) => void) {
		this.observers.push(new Observer<T>(observer));
	}

	unsubscribe() {
		this.observers = [];
	}
}

class Observer<T> {
	next: (value: T) => void;

	constructor(next: (value: T) => void) {
		this.next = next;
	}
}