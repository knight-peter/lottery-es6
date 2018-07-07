/* 模块化 */
/* export let A = 123;

export function test() {
  console.log('test')
}

export class Hello {
  test() {
    console.log('class')
  }
} */


/* 推荐写法 */
let A = 123;

function test() {
  console.log('test')
}
class Hello {
  test() {
    console.log('class')
  }
}

export default {
  A,
  test,
  Hello
}