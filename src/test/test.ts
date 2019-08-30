// 布尔值
let isDone: boolean = false

// 数字
let decLiteral: number = 6
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name: string = 'bob'
name = 'smith'

// 数组
let list: number[] = [1, 2, 3, 4]

let list2: Array<number> = [1, 2, 3]

// 元组  元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number]

x = ['hello', 10]

// 枚举 

enum Color {Red, Green, Blue}
let c: Color = Color.Green

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green

enum Color3 {Red =1, Green, Blue}
let colorName: string = Color3[2]

console.log(colorName)

// Any
let notSure: any = 4
notSure = false
notSure = '122'

notSure = function () {}

notSure.ifItExists = function(){
  console.log(222)
}
notSure.toFixed = function () {}

notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// Void void类型像是与any类型相反，它表示没有任何类型
function warnUser() :void {
  console.log("This is my warning message")
}

let unusable: void = undefined

// Null 和 Undefined   undefined和null两者各自有自己的类型分别叫做undefined和null

let u: undefined = undefined
let n: null = null

// Never never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// Object object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

/* declare function create(o: object | null) : void
create({prop: 0})
create(null) */

// 类型断言
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;  // jsx不能用
let strLength2: number = (someValue as string).length;

type C = { a: string, b?: number }
function f({ a, b }: C): void {
    // ...
}

// 可选属性  带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: "black"})

/* interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
} */  

// 只读属性 对象属性只能在对象刚刚创建的时候修改其值 , 在属性名前用 readonly来指定只读属性

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5; // error!

// TypeScript具有 ReadonlyArray <T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro as number[]
abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

class Greeter1 {
  static standardGreeting = "Hello, there";
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter1.standardGreeting;
      }
  }
}

let greeter1: Greeter1;
greeter1 = new Greeter1('');
console.log(greeter1.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker('');
console.log(greeter2.greet());

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
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

export default{
  list,
  list2
}
