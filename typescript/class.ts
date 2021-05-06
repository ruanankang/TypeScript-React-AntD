class Animal {
  // 修饰符： public 共有属性或方法  private 私有属性或方法  protected 只有自身和子类可以访问  readonly 只读  static 静态，只能类方法
  public name: string;
  static categories: string[] = ['a', 'b'];
  static isAnimal(a: object) {
    return a instanceof Animal;
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())
console.log(Animal.categories)
console.log(Animal.isAnimal(snake))

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const dog = new Dog('xiao');
console.log(dog.bark());


// 接口
interface IRadio {
  switchRadio(): void;
}

interface IBattery {
  checkBatteryStatus(): boolean;
}

class Car implements IRadio {
  switchRadio() {

  }
}

class CellPhone implements IRadio, IBattery {
  switchRadio() {

  }

  checkBatteryStatus() {
    return false;
  }
}