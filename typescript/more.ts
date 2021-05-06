// 类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType = sum

// 类型别名解决联合类型问题
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}


// 类型断言(断言不是类型转换，只是猜测为联合类型中的其中类型) 两种方式

// 方式一：
function getLength(input: number | string): number {
  const str = input as String;
  if (str.length) {
    return str.length
  } else {
    const number = input as Number;
    return number.toString().length
  }
}

// 方式二：
function getLength2(input: number | string): number {
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return (<number>input).toString().length
  }
}

