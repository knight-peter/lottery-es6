/* iterator和for...of循环 */
// for...of背后的原理是用iterator这个api
{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next())
  console.log(map.next())
  console.log(map.next())
}

/* 
1、遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

2、Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

3、在ES6中，有些数据结构原生具备Iterator接口（比如数组），即不用任何处理，就可以被for...of循环遍历，有些就不行（比如对象）。原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），另外一些数据结构没有。凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。

4、在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构
*/
{
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end)
      let len = arr.length;
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }

  for (let key of obj) {
    console.log(key)
  }
}
/* 下面是类似数组的对象调用数组的Symbol.iterator方法的例子。 */
/* 
next()方法会执行generator的代码，
然后，每次遇到yield x;
就返回一个对象{value: x, done: true/false}，然后“暂停”。
返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。
如果done为true，则value就是return的返回值。
*/
{
  let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
  for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
  }
}