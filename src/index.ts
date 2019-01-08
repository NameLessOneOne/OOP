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
import {Composite} from "./composite";
import {Decorator} from "./decorator";
import bigHome = Decorator.bigHome;
import log = Decorator.log;

(function Decorator() {
	@bigHome('triangle')
	class Home {
		name = 'Home';

		@log
		openTheDoor(frontDoor: string, backDoor: string) {
			console.log(`Doing some stuff`);
		}
	}

	const home = new Home();
	home.openTheDoor('Front Door', 'Second Door');
	console.log('home', home);

	const otherHouse = bigHome()(class {});
	const newOtherHouse = new otherHouse();
	newOtherHouse.secondFloorLightOn();
})();

(function Proxy() {

})();

// (function composite() {
// 	const factory1 = new Composite.CarFactory('Ferrari');
// 	const factory2 = new Composite.CarFactory('Volkswagen');
// 	const factory3 = new Composite.CarFactory('Honda');
//
// 	const car1 = new Composite.Car('F450');
// 	const car2 = new Composite.Car('Golf');
// 	const car3 = new Composite.Car('Civic');
//
// 	factory1.add(car1);
// 	factory1.add(car1);
//
// 	factory2.add(car2);
// 	factory2.add(car2);
// 	factory2.add(car3);
//
// 	factory3.add(car3);
// 	factory3.add(car3);
//
// 	factory1.display();
// 	factory2.display();
// 	factory3.display();
// }());
//
// (function observer() {
// 	const someEvent = new Subject<string, Error>();
// 	const someSubId = someEvent.subscribe(
// 		(res: string) => {
// 			console.log(res);
// 		},
// 		(err: Error) => {
// 			console.log('error', err);
// 		},
// 		() => {
// 			console.log('Complete');
// 		},
// 	);
//
// 	const someSubId2 = someEvent.subscribe(
// 		(res: string) => {
// 			console.log(res);
// 		}
// 	);
//
// 	console.log('someSub', someSubId);
//
// 	someEvent.next('vasya');
// 	someEvent.next('igor');
// 	someEvent.next('oleg');
// 	someEvent.next();
//
// 	// someEvent.unsubscribe(someSubId);
// 	// someEvent.next('not oleg');
// 	someEvent.complete();
//
// 	someEvent.subscribe((v) => v);
// 	someEvent.unsubscribe(0);
// })();


// (function mediator() {
// 	const mediator = new Mediator();
// 	const person1 = new Person(mediator, 'Igor');
// 	const person2 = new Person(mediator, 'Valera');
//
// 	person1.send('halo');
// 	person1.send('vasya');
// 	person2.send('oleg eto igor');
// })();

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
