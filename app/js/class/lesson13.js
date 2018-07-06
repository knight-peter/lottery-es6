/* Promise */
{
  // 基本定义，回调
  let ajax = function (callback) {
    console.log('执行')
    setTimeout(function () {
      callback && callback.call()
    }, 1000)
  }
  ajax(function () {
    console.log('timeout1')
  })
}

{
  let ajax = function () {
    console.log('执行2')
    // resolve表示要执行下一步的操作，reject表示要中断当前的操作
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 1000)
    })
  }
  ajax().then(function () {
    // 对应resolve
    console.log('promise', 'timeout2')
  }, function () {
    // 对应reject
  })
}
// 多级回调
{
  let ajax = function () {
    console.log('执行3')
    // resolve表示要执行下一步的操作，reject表示要中断当前的操作
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 1000)
    })
  }
  ajax().then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve()
      }, 2000)
    })
  }).then(function () {
    console.log('timeout3')
  })
}

{
  let ajax = function (num) {
    console.log('执行4')
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve(num)
      } else {
        throw new Error('出错了')
      }
    })
  }

  ajax(6).then(function (num) {
    console.log('log', num)
  }).catch(function (err) {
    console.log('catch', err)
  })
}
// 所有图片加载完再添加到页面
{
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      }
      img.onerror = function (err) {
        reject(err);
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img);
    })
  }

  // Promise.all()把多个Promise实例当成一个新的Promise实例，所以必须是所有promise实例发生变化，才会进行下一步
  Promise.all([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)
}

{
  // 有一个图片加载完就添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        resolve(img);
      }
      img.onerror = function (err) {
        reject(err);
      }
    })
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p)
  }

  Promise.race([
    loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
    loadImg('http://i4.buimg.com/567751/2b07ee25b08930ba.png'),
    loadImg('http://i2.muimg.com/567751/5eb8190d6b2a1c9c.png')
  ]).then(showImgs)

}