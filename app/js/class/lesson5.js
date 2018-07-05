/* 数值扩展 */
{
  // 二进制
  console.log(0b111110111);
  // 八进制
  console.log(0o767);
}

{
  // isFinite判断是否有效
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite('true' / 0));
  console.log('NaN', Number.isNaN(NaN));
}
// isInteger判断是否是整数
{
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));
  console.log('25', Number.isInteger('25')); //必须是数字
}
// 数字最大值和最小值，安全范围
{
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger('10'));
  console.log('a', Number.isSafeInteger('a'));
}
// Math.trunc取整
{
  console.log(4.1, Math.trunc(4.1));
  console.log(4.9, Math.trunc(4.9));
}
// 判断正数负数，Math.sign()值为-1，是负数；0，是0；1，是正数
{
  console.log('-5', Math.sign(-5));
  console.log('0', Math.sign(0));
  console.log('5', Math.sign(5));
  console.log('50', Math.sign(50));
  console.log('foo', Math.sign('foo'));
}

// 立方根
{
  console.log('-1', Math.cbrt(-1));
  console.log('8', Math.cbrt(8));
}
