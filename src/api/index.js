import axios from '@/utils/request.js'
import request from '@/utils/request.js'

// 获取主页数据, 只负责调用一个接口, 返回一个Promise对象
    export const allChannelListAPI = () => axios({
      url: '/v1_0/channels',
      method: 'GET'
    })


   // 用户 - 登录接口
   // axios内部, 会把参数对象转成json字符串格式发后台
   // axios内部, 会自动携带请求参数(headers)里Content-Type: 'application/json' 帮你添加好
   export const loginAPI = ({ mobile, code }) => {
    return request({
      url: '/v1_0/authorizations',
      method: 'POST',
      data: {
        mobile,
        code
      }
    })
  }

