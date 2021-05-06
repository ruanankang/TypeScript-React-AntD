let isDone: boolean = true;

let num: number = 0;
let binaryNumber: number = 0b1111;

let firstName: string = 'alice';
let message: string = `hello, ${firstName}`;

let u: undefined = undefined;
let n: null = null;

let num1: number = undefined; // undefined null 是其他数据类型的子集

let noSure: any = 1;
noSure = 'ww';
noSure.age = 12;

// 联合类型
let numberOrString: number | string = 234;
numberOrString = 'ss'

// 数组
let arrOfNumbers: number[] = [1, 2, 3];

// 元组 Tuple
let tuple: [string, number] = ['alice', 14];
