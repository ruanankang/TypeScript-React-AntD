interface IPerson {
  name: string;  // 注意是分号
  age: number;
  gender?: string; // 可选属性
  readonly id: number; // 只读属性
}

let user: IPerson = {
  id: 1234,
  name: 'bob',
  age: 14
}