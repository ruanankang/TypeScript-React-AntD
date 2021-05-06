function echo<T>(arg: T): T {
  return arg
}

const str: string = 'abc'
const result = echo(str)


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const tuple: [string, number] = ['a', 0];
const newTuple = swap(tuple); // [0, 'a']


function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 3])

// 约束泛型 函数
interface IWithLength {
  length: number;
}

function echoWithArr2<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const arr1 = echoWithArr2([1, 2, 3])
const str1 = echoWithArr2('abc')
const obj1 = echoWithArr2({ length: 2 })


// 约束泛型 类
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str');
console.log(queue2.pop().length)


// 约束泛型 接口
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 1 }

let arr: number[] = [1, 2]
let arr2: Array<number> = [1, 2]


// 
interface IPlus {
  (a: number, b: number): number
}
function plus(a: number, b: number): number {
  return a * b
}
const newFunction: IPlus = plus;


interface IPlus2<T> {
  (a: T, b: T): T
}
function plus2(a: number, b: number): number {
  return a * b
}
function connect(a: string, b: string): string {
  return `${a}${b}`
}
const newFunction2: IPlus2<number> = plus2;
const newFunction3: IPlus2<string> = connect;
