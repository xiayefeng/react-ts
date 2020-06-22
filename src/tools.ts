/*
1、 Partial
  Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
type Partial<T> = {
  [P in keyof T]?: T[P];
}; */

export interface Todo {
  title: string;
  description: string;
}

type fieldsToUpdate = Partial<Todo>;

/* 
* 2、 Record
*  Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
* type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
*/

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

export const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  home: { title: "dddd" },
  contact: { title: "adfasdf" },
};

/* 
* 3、Pick
  Pick<T, K extends keyof T> 的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

*/
export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

export const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

/* 
4、 Exclude
Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。

type Exclude<T, U> = T extends U ? never : T;
如果 T 能赋值给 U 类型的话，那么就会返回 never 类型，否则返回 T 类型。最终实现的效果就是将 T 中某些属于 U 的类型移除掉。
*/

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// 泛型参数默认类型
interface A<T = string> {
  name: T;
}

const strA: A = { name: "Semlinker" };
const numB: A<number> = { name: 101 };

export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function identity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

interface Length {
  length: number;
}

export function identity2<T extends Length>(arg: T): T {
  console.log(arg.length); // 可以获取length属性
  return arg;
}
