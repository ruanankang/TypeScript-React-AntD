// 规定函数入参类型 和 返回值类型
function add(x: number, y: number = 10, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let res = add(2, 3);


const add2 = function (x: number, y: number, z: number = 10): number {
  return x + y + z
}

const add3: (x: number, y: number, z?: number) => number = add2;