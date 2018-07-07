/* Decorator 修饰器,是一个函数 */
{
  // 用descriptor达到禁止修改类的效果
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false;
    return descriptor
  }

  class Test {
    @readonly
    time() {
      return '2017-03-11'
    }
  }

  let test = new Test();

  console.log(test.time())

  // 对test修改会报错
  /* test.time = function () {
    console.log('reset time')
  }
  console.log(test.time()) */
}

{
  // 添加静态变量
  let typename = function (target, name, descriptor) {
    target.myname = 'hello';
  }

  @typename
  class Test {

  }
  console.log('类修饰符', Test.myname)
}
// 第三方库 修饰器的js库：core-decorators; npm install core-decorators

{
  let log = (type) => {
    return function (target, name, descriptor) {
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        console.log(`log ${type}`)
      }
    }
  }

  class AD {
    @log('show')
    show() {
      console.info('ad is show')
    }
    @log('click')
    click() {
      console.log('ad is click')
    }
  }

  let ad = new AD();
  ad.show()
  ad.click()
}