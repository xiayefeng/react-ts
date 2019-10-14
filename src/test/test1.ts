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
let list: number[] = [1, 5, 7]
interface ClockConstructor {
  new (hour: number, minute: number) : ClockInterface
}

interface ClockInterface {
  tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface{
  // constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  // constructor(h: number, m: number){}
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 23)
digital.tick()
analog.tick()
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
console.log(square)

// 混合类型
interface Counter{
  (start: number): string,
  interval: number,
  reset(): void
}

function getCounter(): Counter{
  let counter = (function(start: number){return '1 < 5'}) as Counter
  counter.interval = 123
  counter.reset = function () {console.log('b')}
  return counter
}

let c = getCounter()
console.log(c(10))
c.reset()
c.interval = 5.0
console.log(c.interval)

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select():void
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control{
  select() {}
}

/* class Image implements SelectableControl{
  // private state: any
  select() {}
} */

export default {
  list
}