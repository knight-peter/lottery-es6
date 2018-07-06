/* 类与对象 */
{
  // 基本定义和生成实例
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }
  let v_parent = new Parent('v')
  console.log('构造函数和实例', v_parent)
}
// 继承
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }
  console.log('继承：', new Child())
}
// 继承传递参数
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name); //子类传递参数，super一定是放在构造函数第一行
      this.type = 'child'
    }
  }
  console.log('继承：', new Child('hello'))
}
// getter,setter
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    // longName 是属性
    get longName() {
      return 'mk' + this.name
    }
    set longName(value) {
      this.name = value
    }
  }
  let v = new Parent()
  console.log('getter:', v.longName)
  //赋值就是set操作
  v.longName = 'hello'
  console.log('setter', v.longName)
}
// 静态方法，通过类去调用，而不是通过类的实例去调用
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    static tell() {
      console.log('tell')
    }
  }

  Parent.tell()
}
// 静态属性
{
  class Parent {
    constructor(name = 'mukewang') {
      this.name = name;
    }
    static tell() {
      console.log('tell')
    }
  }
  Parent.type = 'test'
  console.log('静态属性：', Parent.type)
}