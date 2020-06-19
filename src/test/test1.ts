/* interface ClockInterface{
  currentTime: Date
  setTime(d: Date) : void
}

class Clock implements ClockInterface{
  currentTime: Date
  setTime(d: Date){
    this.currentTime = d
  }
  constructor(h: number, m: number){
    this.currentTime = new Date()
  }
} */
let list: number[] = [1, 5, 7];
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
// console.log(name)
interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  // constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface {
  // constructor(h: number, m: number){}
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 23);
digital.tick();
analog.tick();
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
console.log(square);

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = function (start: number) {
    return "1 < 5";
  } as Counter;
  counter.interval = 123;
  counter.reset = function () {
    console.log("b");
  };
  return counter;
}

let c = getCounter();
console.log(c(10));
c.reset();
c.interval = 5.0;
console.log(c.interval);

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

/* class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control{
  select() {}
} */

/* class Image implements SelectableControl{
  // private state: any
  select() {}
} */

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  // constructor(name: string) {super(name)}
  move(distanceInMeters = 5) {
    console.log("slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  // constructor(name: string) {super(name)}
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

export default {
  list,
};

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name)  // error

class Person2 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee can extend Person
class Employee2 extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard2 = new Employee2("Howard", "Sales");
console.log(howard2);
// let john = new Person2("John"); // Error: The 'Person' constructor is protected

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad);
// dad.name = "Man with the 3-piece suit"; // error! name is readonly

class Octopus2 {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {}
}
let dad2 = new Octopus2("Man with the 8 strong legs");
console.log(dad2);

const fullNameMaxLength = 10;

class Employee3 {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }

    this._fullName = newName;
  }
}

let employee = new Employee3();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log(employee.fullName);

  console.log(employee);
}

class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/* abstract class Animal2 {
  abstract makeSound(): void;
  move(): void {
      console.log("roaming the earth...");
  }
} */

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

class Animal2 {
  name: string;
}

class Dog extends Animal2 {
  bread: string;
}

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal2;
}

interface SearchFunc {
  (source: string, subSring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subSring: string) {
  let result = source.search(subSring);
  return result > -1;
};
mySearch("acb", "b");

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log(myStr);

let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
console.log(myArray2);

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor() {
    this.greeting = "";
  }
  greet() {
    if (this.greeting) {
      return "Hello" + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
console.log(greeter1.greet());

class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);

class Greeter2 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter3: Greeter2;
greeter3 = new Greeter2("world");
console.log(greeter3.greet());

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["a", "b", "c", "d"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card:" + pickedCard.card + " of " + pickedCard.suit);

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let result1 = buildName("Bob");
let result2 = buildName("Blob", "Adams");
console.log(result1, result2);

let myAdd = function (x: number, y: number): number {
  return x + y;
};
let myAdd2: (baseValue: number, increment: number) => number = (x, y) => {
  return x + y;
};
console.log(myAdd(1, 2));
console.log(myAdd2(6, 56));

function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas");
console.log(employeeName);

function identity<T>(arg: T): T {
  return arg;
}

function loggingidentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

let output = identity(56333);
console.log(output);

let myIdentity: <T>(arg: T) => T = identity;

let myIdentity2: <U>(arg: U) => U = identity;

let myIdentity3: { <T>(arg: T): T } = identity;

interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity4: GenericIdentityFn = identity;

interface GenericIdentityFn2<T> {
  (arg: T): T;
}

let myIdentity5: GenericIdentityFn2<number> = identity;
console.log(myIdentity5(6));
console.log(loggingidentity(["aa"]));
console.log(myIdentity("adsfdasf"));
console.log(myIdentity2(false));
console.log(myIdentity3(Symbol("a")));
console.log(myIdentity4(null));

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNmuber = new GenericNumber<number>();
myGenericNmuber.zeroValue = 6;
myGenericNmuber.add = function (x, y) {
  return x + y;
};

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity("3");

function create<T>(c: { new (): T }): T {
  return new c();
}

class Beekeeper {
  hasMask: boolean = false;
}

class ZooKeeper {
  nametag: string = "我是滴滴滴";
}

class Animal3 {
  numLegs: number = 0;
}

class Bee extends Animal3 {
  keeper: Beekeeper = create(Beekeeper);
}

class Lion extends Animal3 {
  keeper: ZooKeeper = create(ZooKeeper);
}

function createInstance<A extends Animal3>(c: new () => A): A {
  return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction[1]);
