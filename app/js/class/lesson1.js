function test() {
  /* let a = 1;
  for (let i = 1; i < 3; i++) {
    console.log('i:', i)
  }
  console.log(i) */
  // es6 重复声明会报错
  /* let a = 1
  let a = 1 */
}

// test();

// 常量不能修改，声明的时候必须赋值
function last() {
  const PI = 3.1415926
  const k = {
    a: 1
  }
  k.b = 3
  console.log(PI, k)
}
last();