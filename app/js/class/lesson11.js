import {
  Agent
} from "https";

/* Proxy和Reflect */
{
  // 供应商，原始数据
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }
  // 生成一个对象，映射obj，中间做一些操作。
  let monitor = new Proxy(obj, {
    // 拦截代理对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性,target是obj对象
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key]
      }
    },
    // 拦截key in object操作
    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key]
      }
    },
    // 拦截 Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  })
  // 用户访问的是monitor，最终通过Proxy传递给obj
  console.log('get', monitor.time)
  monitor.time = '2019';
  monitor.name = 'mukewang'
  console.log('set:', monitor.time, monitor)

  console.log('has:', 'name' in monitor, 'time' in monitor)

  // delete monitor.time
  // console.log('delete:', monitor)
  // delete monitor._r
  // console.log('delete:', monitor)

  console.log('ownKeys', Object.keys(monitor))
}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  }

  console.log('Reflect get', Reflect.get(obj, 'time'))
  Reflect.set(obj, 'name', 'mukewang')
  console.log('set:', obj)
  console.log('has:', Reflect.has(obj, 'name'))
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        // hasOwnProperty()判断是否有key值
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          // 执行personValidators里面的函数
          // “!!”则是逻辑与的取反运算，省去了多次判断null、undefined和空字符串的冗余代码，va()有内容才执行的代码
          if (!!va(value)) {
            // Reflect设置对象
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators)
    }
  }

  const person = new Person('lilei', 30)

  console.info(person)

  person.name = 'Han mei mei';

  console.info('修改name:', person)

}