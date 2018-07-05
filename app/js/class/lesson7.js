// 函数扩展
{
  // 默认值参数后面，只能有带默认值的参数
  function test(x, y = 'world') {
    console.log('默认值：', x, y);
  }
  test('hello');
  test('hello', 'kill');
}

{
  let x = 'test';
  function test2(c, y = x) {
    console.log('作用域：', c, x, y);
  }
  // test2('kill');
  test2('kill');
}

{
  // ...arg参数后面不能有其他参数
  function test3(...arg) {
    for (let v of arg) {
      console.log('rest:', v);
    }
  }
  test3(1, 2, 3, 4, 'a');
}
// rest参数
{
  console.log(...[1, 2, 4]);
  console.log('a', ...[1, 2, 4]);
}
// 箭头函数
{
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3));
  console.log('arrow2', arrow2());
}
// 尾调用，函数式编程
/* 
函数的最后一步是函数，就叫尾调用。
为了性能，使用尾调用。
*/
{
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);
}
