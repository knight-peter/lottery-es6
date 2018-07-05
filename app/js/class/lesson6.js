/* 数组扩展 */
{
  // Array.of()把一组数据变量转换成数组
  let arr = Array.of(3, 4, 5, 8, 11);
  console.log('arr=', arr)
  // 返回空数组
  let empty = Array.of()
  console.log('empty:', empty)
}

{
  // Array.form()把dom集合转换成数组
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p)
  pArr.forEach(function (item) {
    console.log(item.textContent)
  })

  console.log(Array.from([1, 3, 5], function (item) {
    return item * 2
  }))
}

// .fill()替换数组里的元素
{
  console.log('fill-7', [1, 'a', undefined].fill(7))
  // 从起始位置1到结束位置3，进行替换
  console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3))
}

{
  // .keys()，返回key值
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.log('keys:', index)
  }
  // .values()，返回value值
  for (let value of ['1', 'c', 'ks'].values()) {
    console.log('values:', value)
  }
  // .entries()，返回key和value
  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.log('keys:', index, 'values:', value)
  }
}

{
  // 截取位置3到位置4之前，替换位置0的元素
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
}

{
  // 查找元素是否存在
  // .find()找到第一个符合条件的元素就返回值
  console.log([1, 2, 3, 4, 5, 6].find(function (item) {
    return item > 3
  }))
  console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
    return item > 3
  }))
}

{
  // 查找元素是否存在,存在则返回true
  console.log('number', [1, 2, NaN].includes(1))
  // 可以查找NaN
  console.log('number', [1, 2, NaN].includes(NaN))
}