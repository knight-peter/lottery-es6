/* Generator */
{
  // genertaor基本定义
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  }

  let k = tell();

  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
  console.log(k.next())
}

{
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }
  for (let value of obj) {
    console.log('value:', value)
  }
}
// 状态机
{
  let state = function* () {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log('Generator:', status.next());
  console.log('Generator:', status.next());
  console.log('Generator:', status.next());
  console.log('Generator:', status.next());
  console.log('Generator:', status.next());
  console.log('Generator:', status.next());
}
// async await是generator的语法糖。 async相当于*；await相当于yield;
/* {
  let state = async function () {
    while (1) {
      await 'A';
      await 'B';
      await 'C';
    }
  }
  let status = state();
  console.log('async:', status.next());
  console.log('async:', status.next());
  console.log('async:', status.next());
  console.log('async:', status.next());
  console.log('async:', status.next());
  console.log('async:', status.next());
} */

{
  let draw = function (count) {
    // 具体抽奖逻辑
    console.log(`剩余${count}次`)
  }
  let residue = function* (count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  }
  let star = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function () {
    star.next();
  }, false)
}

{
  // 长轮询
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      // 这里写真实接口，目前用setTimeout来模拟。
      setTimeout(function () {
        resolve({
          code: 0
        })
      }, 200)
    })
  }
  let pull = function () {
    let genertaor = ajax();
    let step = genertaor.next();
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function () {
          console.info('wait');
          pull()
        }, 1000)
      } else {
        console.info(d)
      }
    })
  }
  pull();
}