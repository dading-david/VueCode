import originJSONP from 'jsonp'
import qs from 'qs'

export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '') + param(data)//调用拼接函数param(data)函数完成url的拼接，并判断原来的url是否有?，若没有则在末尾加上?
  console.log("url:" + url)
  return new Promise((resolve, reject) => {//用Promise封装jsonp
    originJSONP(url, option, (err, data) => {//jsonp请求函数，其中url为请求地址，option为可选参数，(err,data)为回调函数
      if (!err) {//表示jsonp请求成功
        resolve(data)
      } else {//表示jsonp请求失败
        reject(err)
        console.log("我太难了")
      }
    })
  })
}

function param(data) {//实现url的拼接（将data拼接到url上）
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''//es6语法，如果url有数据，就删掉第一个&符号
}