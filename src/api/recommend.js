//拿到jsonp的函数
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import qs from 'qs'

export function getRecommend() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?'

  const data = Object.assign({}, commonParams, {
    data: {
      "comm": { "g_tk": 5381, "uin": 0, "format": "json", "inCharset": "utf-8", "outCharset": "utf-8", "notice": 0, "platform": "h5", "needNewCode": 1 },
      "MusicHallHomePage": {
        "module": "music.musicHall.MusicHallPlatform",
        "method": "MobileWebHome",
        "param": { "ShelfId": [101, 102, 161] }
      },
      "hotkey": {
        "module": "tencent_musicsoso_hotkey.HotkeyService",
        "method": "GetHotkeyForQQMusicMobile",
        "param": {
          "remoteplace": "txt.miniapp.wxada7aab80ba27074",
          "searchid": "1559616839293"
        }
      }
    }
  })
  let jsondata = JSON.stringify(data)
  console.log('jsondata: ' + jsondata)
  //let urldata = encodeURIComponent(jsondata)
  //console.log('urldata: ' + urldata)
  return jsonp(url, data, options)
}