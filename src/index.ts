import {Singleton} from "./singleton";
import {Program} from "./abstract-factory";
import {SomeOtherFactory} from "./prototype";
import {CarCreator} from "./builder";
import {BridgeFactory} from "./bridge";
import AbstractBridge = BridgeFactory.AbstractBridge;
import Bridge1 = BridgeFactory.Bridge1;
import Bridge2 = BridgeFactory.Bridge2;
import {Subject} from "./observer";

import {Composite} from "./composite";
import {Decorator} from "./decorator";
import bigHome = Decorator.bigHome;
import log = Decorator.log;
import {Proxy} from "./proxy";
import RealImage = Proxy.RealImage;
import ProxyImage = Proxy.ProxyImage;
import {Decorator2} from "./decorator2";
import VisualComponent = Decorator2.VisualComponent;
import BorderDecorator2 = Decorator2.BorderDecorator2;
import {Mediator} from "./mediator";
import Person = Mediator.Person;
import Sender = Mediator.Sender;
import ISender = Mediator.ISender;
import IPerson = Mediator.IPerson;

// (function Decorator() {
// 	@bigHome('triangle')
// 	class Home {
// 		name = 'Home';
//
// 		@log
// 		openTheDoor(frontDoor: string, backDoor: string) {
// 			console.log(`Doing some stuff`);
// 		}
// 	}
//
// 	const home = new Home();
// 	home.openTheDoor('Front Door', 'Second Door');
// 	console.log('home', home);
//
// 	const otherHouse = bigHome()(class {});
// 	const newOtherHouse = new otherHouse();
// 	newOtherHouse.secondFloorLightOn();
// })();

// (function Decorator2() {
// 	const BorderDecorator = new BorderDecorator2(new VisualComponent(), 20);
// 	BorderDecorator.draw();
// }());

// (function Proxy() {
// 	const image1 = new ProxyImage('Image1');
// 	const image2 = new ProxyImage('Image2');
//
// 	image1.displayImage();
// 	image1.displayImage();
//
// 	image2.displayImage();
// 	image2.displayImage();
// 	image2.displayImage();
// })();

(function composite() {
	const factory1 = new Composite.CarBrand('Ferrari');
	const factory2 = new Composite.CarBrand('Volkswagen');
	const factory3 = new Composite.CarBrand('Honda');

	const car1 = new Composite.CarModel('F450');
	const car2 = new Composite.CarModel('Golf');
	const car3 = new Composite.CarModel('Civic');

	factory1.add(car1);
	factory1.add(car1);

	factory2.add(car2);
	factory2.add(car2);

	factory3.add(car3);

	factory1.add(factory2);
	factory1.add(factory3);

	factory1.display();
}());

// (function observer() {
// 	const someEvent = new Subject<string, Error>();
//
// 	const firstSubscriber = someEvent.subscribe(
// 		(res: string) => {
// 			console.log('First event result:', res);
// 		},
// 		(err: Error) => {
// 			console.log('error', err);
// 		},
// 		() => {
// 			console.log('First event COMPLETED');
// 		},
// 	);
//
// 	const secondSubscriber = someEvent.subscribe(
// 		(res: string) => {
// 			console.log('Second event result:', res);
// 		}
// 	);
//
// 	someEvent.next('vasya');
// 	someEvent.next('igor');
// 	someEvent.next('oleg');
// 	someEvent.next();
//
// 	console.log('someSubId', firstSubscriber);
// 	someEvent.unsubscribe(firstSubscriber);
// 	someEvent.next('not oleg');
// 	someEvent.complete();
//
// 	someEvent.subscribe((v) => v);
// 	someEvent.unsubscribe(0);
// })();


// (function mediator() {
// 	const mediator: ISender = new Sender();
// 	const person1: IPerson = new Person(mediator, 'Igor');
// 	const person2: IPerson = new Person(mediator, 'Valera');
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
