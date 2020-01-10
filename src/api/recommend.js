/**向外暴露一个getRecommend方法，其中调用jsonp(url,urlparams,options)完成url请求的拼接以及抓取qq音乐推荐页的数据 */
//拿到jsonp的函数
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import qs from 'qs'

export function getRecommend() {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg?'

  const urlparams = Object.assign({}, commonParams, {
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
  return jsonp(url, urlparams, options)//返回请求结果
}