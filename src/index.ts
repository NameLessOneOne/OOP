import {Singleton} from "./singleton";
import {Program} from "./abstract-factory";

const SingletonClass = Singleton.getInstance();
SingletonClass.increaseNumber();
SingletonClass.decreaseNumber();
SingletonClass.decreaseNumber();
SingletonClass.setNumber(22);

console.log('SingletonClass', SingletonClass);

console.log('b', Program.Main());
