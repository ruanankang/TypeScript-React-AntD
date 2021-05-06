enum Direction {
  Up,
  Down,
  Left,
  Right = 10
}

console.log(Direction.Up) // 0
console.log(Direction[0]) // Up
console.log(Direction.Right) // 10
console.log(Direction[10]) // Right

enum Direction1 {
  Up = 'Up',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

// 常量枚举, 与计算枚举区别在于编译后的js文件，更加简单，性能好
const enum Direction2 {
  Up = 'Up',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
