import $ from 'jquery';
import {
  resolve
} from 'path';

class Interface {
  /** 
   * [getOmit 获取遗漏数据]
   * @param {string} issue [当前期号]
   * @return {[type]}      [description]
   *
   */
  getOmit(issue) {
    let self = this;
    // 1.使用Promise使用.then()方法进行异步操作。避免回调
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          // 2.用对象方法方式，利用class继承，可以使用其他模块的方法。避免回调
          self.setOmit(res.data)
          resoleve.call(self, res)
        },
        error: function (err) {
          reject.call(err)
        }
      })
    })
  }
  /* 获取开奖号码，issue 期号 */
  getOpenCode(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/opencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res)
        },
        error: function (err) {
          reject.call(err)
        }
      })
    })
  }
  /* 获取当前状态,issue 期号 */
  getState(issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res)
        },
        error: function (err) {
          reject.call(err)
        }
      })
    })
  }
}

export default Interface