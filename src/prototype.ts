interface BookPrototype {
	clone(): BookPrototype;
}

class Book1 implements BookPrototype {
	private pages = 88;

	clone(): BookPrototype {
		return new Book1()
	}
}

class Book2 implements BookPrototype {
	private pages = 35;

	clone(): BookPrototype {
		return new Book2()
	}
}

abstract class BookFactory {
	abstract createBook(name: string): BookPrototype;
}

export class SomeOtherFactory extends BookFactory {
	private books: { [name: string]: BookPrototype; } = {};

	constructor() {
		super();
		this.books['Book1'] = new Book1();
		this.books['Book2'] = new Book2();
	}

	createBook(book: string): BookPrototype {
		return this.books[book].clone()
	}
}
