/* 字符串扩展 */
{
  console.log('a', '\u0061')
  console.log('s', '\u20BB7')
  // 用{}包裹超出字节长度的字符，当成utf-8整体来处理
  console.log('s', '\u{20BB7}')
}

{
  let s = '𠮷';
  // 字节长度为2
  console.log('length', s.length)

  console.log('0', s.charAt(0))
  console.log('1', s.charAt(1))
  console.log('at0', s.charCodeAt(0))
  console.log('at1', s.charCodeAt(1))

  let s1 = '𠮷a'
  console.log('length', s1.length)

  console.log('code0', s1.charCodeAt(0))
  console.log('code0', s1.charCodeAt(0).toString(16))
  console.log('code1', s1.charCodeAt(1))
  console.log('code2', s1.charCodeAt(2))
}

{
  console.log(String.fromCharCode('0x20bb7'))
  console.log(String.fromCodePoint('0x20bb7'))
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i])
  }

  for (let code of str) {
    console.log('es6', code)
  }
}

{
  let str = 'string';
  // includes查询字符中是否包含某个字符
  console.log('includes', str.includes('i'))
  // start查询字符中是否以某个字符为起始
  console.log('start', str.startsWith('str'))
  // end查询字符中是否以某个字符为结束
  console.log('end', str.endsWith('ng'))
}

{
  // 字符串复制重复
  let str = 'abc';
  console.log('repeat', str.repeat(2))
}
// 字符串模板
{
  let name = 'list';
  let info = 'hello world';
  console.log('字符串模板:', `I am ${name},${info}`)
}

{
  // 字符串补白
  console.log('1'.padStart(2, '0'))
  console.log('1'.padEnd(2, '0'))
}

{
  let user = {
    name: 'list',
    info: 'hello world'
  }
  console.log(abc `I am ${user.name},${user.info}`)

  function abc(s, v1, v2) {
    console.log(s, v1, v2)
    return s + v1 + v2
  }
}

{
  console.log(String.raw `Hi\n${1+2}`)
  console.log(`Hi\n${1+2}`)
}