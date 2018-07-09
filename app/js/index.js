import 'babel-polyfill'
// import './class/lesson1'
// import './class/lesson2'
// import './class/lesson3'
// import './class/lesson4'
// import './class/lesson5'
// import './class/lesson7'
// import './class/lesson8'
// import './class/lesson9'
// import './class/lesson10'
// import './class/lesson11'
// import './class/lesson12'
// import './class/lesson13'
// import './class/lesson14'
// import './class/lesson15' //Generator
// import './class/lesson16' //Decorator 修饰器
// import './class/lesson17' //模块化

/* import {
  A,
  test,
  Hello
} from './class/lesson17' */


// console.log(A, test, Hello)
// 只用导出的其中一项
/* import {
  A,
} from './class/lesson17'
console.log(A) */

// 不用去关系导出项的每个名称,*代表导入的所有项，lesson17是别名，所有项放到lesson17这个对象下面
/* import * as lesson17 from './class/lesson17'
console.log(lesson17.A, lesson17.test) */

/* import lesson17 from './class/lesson17'
console.log(lesson17.A) */

import Lottery from './lottery';