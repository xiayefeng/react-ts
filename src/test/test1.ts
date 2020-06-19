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

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
  [index: string]: any;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let cc: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
  width: 53,
};

console.log(cc);

enum EventType {
  Mouse,
  Keyboard,
}

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  x: number;
  y: number;
}

interface KeyEvent extends Event {
  keyCode: number;
}

function listenEvent(EventType: EventType, handler: (n: Event) => void) {}

listenEvent(EventType.Mouse, (e: Event) =>
  console.log((e as MouseEvent).x + "," + (e as MouseEvent).y)
);

listenEvent(EventType.Mouse, ((e: MouseEvent) =>
  console.log(e.x + "," + e.y)) as (e: Event) => void);

// listenEvent(EventType.Mouse, (e: number) => console.log(e));
function invokeLater(args: any[], callback: (...args: any[]) => void) {
  /* ... Invoke callback with 'args' ... */
}

invokeLater([1, 2], (x, y) => console.log(x + ", " + y));
invokeLater([1, 2], (x?, y?) => console.log(x + ", " + y));

/* function extend <T, U> (first: T, second: U) : T & U {
  let result = {} as T & U
  for(let id in first){
    (result as any)[id] = (first as any)[id]
  }
  for(let id in second){
    if(!result.hasOwnProperty(id)){
      (result as any)[id] = (second as any)[id]
    }
  }
  return result
} */
class myType {}

function extend<First extends myType, Second extends myType>(
  first: First,
  second: Second
): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;
}

class Person3 extends myType {
  constructor(public name: string) {
    super();
  }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger extends myType implements Loggable {
  age: number;
  constructor() {
    super();
    this.age = 18;
  }
  log() {
    // ...
    console.log("ddddsafas");
  }
}
var jim = extend(new Person3("Jim"), new ConsoleLogger());
var n = jim.name;
// jim.log();
console.log(n);

function padLeft(value: string, padding: string | number): string {
  var str: string = "";
  if (typeof padding === "number") {
    str = Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    str = padding + value;
  }
  return str;
}

console.log(padLeft("dd", 1));

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    swim() {
      console.log(111);
    },
    layEggs() {
      console.log(222);
    },
  };
}

let pet = getSmallPet();
pet.layEggs();
// pet.swim()
// (pet as Fish).swim();
// (pet as Bird).fly()

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + ". the " + epithet;
  }
  name = name || "Bob";
  return postfix("great");
}
console.log(fixed("aaa"));

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person4 {
  name: string;
}

// eslint-disable-next-line
var people: LinkedList<Person4>;

type Alias = { num: number };
interface Interface {
  num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

interface Square2 {
  kind: "square";
  size: number;
}

interface Rectangle2 {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle2 {
  kind: "circle";
  radius: number;
}

type Shape2 = Square2 | Rectangle2 | Circle2;
function area(s: Shape2) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return assertNever(s);
  }
}

console.log(area({ kind: "circle", radius: 10 }));

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

class BasicCalculator {
  constructor(protected value: number = 0) {}
  currentValue(): number {
    return this.value;
  }
  add(operand: number): this {
    this.value += operand;
    return this;
  }
  multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

let v = new BasicCalculator(2).multiply(5).add(8).currentValue();
console.log(v);

class ScientificCalculator extends BasicCalculator {
  constructor(value = 0) {
    super(value);
  }
  sin(): this {
    this.value = Math.sin(this.value);
    return this;
  }
}

let v2 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
console.log(v2);

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

interface Person5 {
  name: string;
  age: number;
  address: string;
}

let person: Person5 = {
  name: "jarid",
  age: 35,
  address: "dasfd",
};

let strings: string[] = pluck(person, ["name", "address"]);
console.log(strings);

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

let name: string = getProperty(person, "name");
let age: number = getProperty(person, "age");
console.log(name, age);

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [p in keyof T]?: T[p];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type Record<K extends string, T> = {
  [P in K]: T;
};

type ThreeStringProps = Record<"prop1" | "prop2" | "prop3", string>;

/* 
Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
Extract<T, U> -- 提取T中可以赋值给U的类型。
NonNullable<T> -- 从T中剔除null和undefined。
ReturnType<T> -- 获取函数返回值类型。
InstanceType<T> -- 获取构造函数类型的实例类型。
 */
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;
let str8: T00 = "b";
console.log(str8);
