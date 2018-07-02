/* 结构赋值 */
// 用{}把代码包起来，防止变量重复声明
{
  let a, b, rest;
  [a, b] = [1, 2]
  console.log(a, b)
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest)
}

{
  let a, b;
  ({
    a,
    b
  } = {
    a: 1,
    b: 2
  })
  console.log(a, b)
}
// 如果解构赋值，结构上没有配对，为undefined
{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2]
  console.log(a, b, c)
}
// 应用1：关于变量的交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log('变量的交换：', a, b)
}
// 应用2：获取函数返回值
{
  function f() {
    return [1, 2]
  }
  let a, b;
  [a, b] = f();
  console.log('获取函数返回值:', a, b)
}
// 应用3:选择性接受返回的值
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, , , b] = f();
  console.log('选择性接受返回的值:', a, b)
}
// 应用4：接收未知长度的值
{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let a, b, c;
  [a, ...b] = f();
  console.log('接收未知长度的值', a, b)
}
// 对象解构赋值
{
  let o = {
    p: 42,
    q: true
  }
  let {
    p,
    q
  } = o;
  console.log(p, q)
}
// 对象里面设置默认值，并通过解构赋值修改对象的值
{
  let {
    a = 10, b = 5
  } = {
    a: 3
  };
  console.log(a, b)
}
// 应用1：嵌套的对象和数组的运用,解构时对象解构一一对应，可以自定义变量
{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {
    title: esTitle,
    test: [{
      title: cnTitle
    }]
  } = metaData;
  console.log(esTitle, cnTitle)
}
// 圆括号的使用,如果在解构之前就定义了变量，这时候你再解构会出现问题,只要在解构的语句外边加一个圆括号就可以了。
{
  let foo;
  ({
    foo: name
  } = {
    foo: 'xuqi'
  })
  console.log(name)
}