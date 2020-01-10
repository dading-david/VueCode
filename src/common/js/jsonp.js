/*封装jsonp请求实现跨域抓取qq音乐推荐页面的数据*/

import originJSONP from 'jsonp'
import qs from 'qs'

export default function jsonp(url, urlparams, option) {
  url += (url.indexOf('?') < 0 ? '?' : '') + param(urlparams)//调用拼接函数param(urlparams)函数完成url的拼接，并判断原来的url是否有?，若没有则在末尾加上?
  console.log("url:" + url)
  return new Promise((resolve, reject) => {//用Promise封装jsonp
    originJSONP(url, option, (err, urlparams) => {//jsonp请求函数，其中url为请求地址，option为可选参数，(err,urlparams)为回调函数
      if (!err) {//表示jsonp请求成功
        resolve(urlparams)
      } else {//表示jsonp请求失败
        reject(err)
        console.log("请求qq音乐推荐页面失败")
      }
    })
  })
}

function param(urlparams) {//实现url的拼接（将urlparams拼接到url上）
  let url = ''
  for (var k in urlparams) {
    let value = urlparams[k] !== undefined ? urlparams[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  console.log('urlparams: ' + url)
  return url ? url.substring(1) : ''//es6语法，如果url有数据，就删掉第一个&符号
}