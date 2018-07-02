/* 正则扩展 */

{
  // es5
  // 两个参数的写法
  let regex = new RegExp('xyz', 'i');
  // 一个参数的写法
  let regex2 = new RegExp(/xyz/i)
  console.log(regex.test('xyz123'), regex2.test('xyz123'))
  // es6
  /* 允许第一个参数是正则表达式，
  允许第二个参数为修饰符，
  第二个参数会覆盖第一个参数正则表达式所表示的修饰符
  .flags是用来获取正则构造函数的修饰符
  */
  let regex3 = new RegExp(/xyz/ig, 'i');
  console.log(regex3.flags)
}
/* g和y两种修饰符的作用
 ** g:全局匹配，从上一次匹配的地方继续寻找，直到找到匹配的地方
 ** y:全局匹配，从上一次匹配的地方继续寻找，必须是紧邻的字符匹配上才算匹配成功
 */
{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;
  console.log('one', a1.exec(s), a2.exec(s))
  console.log('two', a1.exec(s), a2.exec(s))

  // 判断正则是否开启'y'修饰符
  console.log('正则是否开启y修饰符:', a1.sticky, a2.sticky)
}
/* u修饰符，
 ** 添加u修饰符，把()中内容当成utf-8来编译
 ** 字符串大于两个字节的，一定要加上u修饰符
 ** .不能匹配所有字符（所有小于两个字节的字符），行分隔符，段分隔符，也不能匹配到
 */
{
  // u修饰符将.test()的内容当成一个主体，所以匹配不到
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'))
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'))

  console.log(/\u{61}/.test('a'))
  console.log(/\u{61}/u.test('a'))

  // console.log(`\u{20BB7}`)
  // 字符串大于两个字节的，一定要加上u修饰符
  let s = '𠮷';

  console.log('不使用u修饰符', /^.$/.test(s))
  console.log('使用u修饰符来匹配大于两个字符的字符串', /^.$/u.test(s))
  // 字符串中本身就有两个字节长度大于两个的字符，也需要用u修饰符来匹配
  console.log('test', /𠮷{2}/.test('𠮷𠮷'))
  console.log('test', /𠮷{2}/u.test('𠮷𠮷'))


}