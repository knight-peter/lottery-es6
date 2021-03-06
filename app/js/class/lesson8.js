/* 对象扩展 */
{
  // 简洁表达法
  let o = 1;
  let k = 2;
  let es5 = {
    o: o,
    k: k
  }
  let es6 = {
    o,
    k
  }
  console.log('es5:', es5, 'es6:', es6)

  let es5_method = {
    hello: function () {
      console.log('hello')
    }
  }
  let es6_method = {
    hello() {
      console.log('hello')
    }
  }
  console.log('es5_method:', es5_method, 'es6_method:', es6_method)
}

{
  // 属性表达式
  let a = 'b';
  let es5_obj = {
    a: 'c',
    b: 'c'
  }
  // a是变量取得的值是'b'
  let es6_obj = {
    [a]: 'c'
  }
  console.log('es5_obj:', es5_obj, 'es6_obj:', es6_obj)
}

{
  // 新增API .is()判断两个参数是否相等,相当于 === 的作用
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc')
  console.log('数组', Object.is([], []), [] === [])
  // 浅复制
  console.log('拷贝', Object.assign({
    a: 'a'
  }, {
    b: 'b'
  }))

  let test = {
    k: 123,
    o: 456
  };
  // .entries()，返回key和value
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value])
  }
}

/* {
  // 扩展运算符
  let {
    a,
    b,
    ...c
  } = {
    a: 'test',
    b: 'kill',
    c: 'ddd',
    d: 'ccc'
  }
  console.log(a, b, c)
} */