import {Singleton} from "./singleton";
import {Program} from "./abstract-factory";
import {SomeOtherFactory} from "./prototype";
import {CarCreator} from "./builder";
import {BridgeFactory} from "./bridge";
import AbstractBridge = BridgeFactory.AbstractBridge;
import Bridge1 = BridgeFactory.Bridge1;
import Bridge2 = BridgeFactory.Bridge2;
import {Subject} from "./observer";
import {Mediator, Person} from "./mediator";

(function observer() {
	const someEvent = new Subject<string>();
	someEvent.subscribe((res: string) => {
		console.log(res);
	});

	someEvent.next('vasya');
	someEvent.next('igor');
	someEvent.next('oleg');
	someEvent.next();

	someEvent.unsubscribe();
	someEvent.next('not oleg');
})();


(function mediator() {
	const mediator = new Mediator();
	const person1 = new Person(mediator, 'Igor');
	const person2 = new Person(mediator, 'Valera');

	person1.send('halo');
	person1.send('vasya');
	person2.send('oleg eto igor');
})();

// (function singleton() {
// 	Singleton.getInstance().increaseNumber();
// 	Singleton.getInstance().increaseNumber();
// 	Singleton.getInstance().increaseNumber();
// 	Singleton.getInstance().decreaseNumber();
//
// 	console.log('singleton', Singleton.getInstance());
// })();

// (function abstractFactory() {
// 	const abstractFactory = Program.main();
// 	console.log('abstractFactory', abstractFactory);
// })();
//
// (function prototype() {
// 	const factory = new SomeOtherFactory();
// 	const prototypes = ['Book1', 'Book2'].map((name) => {
// 		return factory.createBook(name)
// 	});
// 	console.log('prototype', prototypes)
// })();
//
// (function prototype() {
// 	const carCreator = new CarCreator();
// 	carCreator.buildSportcar();
// })();
//
// (function bridge() {
// 	new AbstractBridge(new Bridge1()).callMethod1();
// 	new AbstractBridge(new Bridge2()).callMethod2();
// })();
