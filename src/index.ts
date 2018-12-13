import {Singleton} from "./singleton";
import {Program} from "./abstract-factory";
import {SomeOtherFactory} from "./prototype";

(function singleton() {
	const singletonClass = Singleton.getInstance();
	singletonClass.increaseNumber();
	singletonClass.decreaseNumber();
	singletonClass.decreaseNumber();
	singletonClass.setNumber(22);

	console.log('singleton', singletonClass);
})();

(function abstractFactory() {
	const abstractFactory = Program.main();
	console.log('abstractFactory', abstractFactory);
})();

(function prototype() {
	const factory = new SomeOtherFactory();
	const prototypes = ['Book1', 'Book2'].map((name) => {
		return factory.createBook(name)
	});
	console.log('prototype', prototypes)
})();
