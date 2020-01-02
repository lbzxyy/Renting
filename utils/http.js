
/**
 * 接口请求地址
 */
// const BaseUrl = 'https://api-online-mini-test.sofb.com/sofb-online-mini'; // 新测试环境
const BaseUrl = 'https://api-online-mini.sofb.com/sofb-online-mini'; // 新线上环境

// const BaseUrl = 'https://shenzhen-test.sofb.com/sofb-online'; // 测试环境
// const BaseUrl = 'https://shenzhen-pre.sofb.com/sofb-online'; // 预发布环境
// const BaseUrl = 'https://shenzhen.sofb.com/sofb-online'; // 线上环境
// const BaseUrl = 'http://10.152.200.132:8123/sofb-online'; // 开发环境

class request {
    constructor() {
      this._header = {}
    }
  
  /**
   * 设置统一的异常处理
   */
    setErrorHandler(handler) {
      this._errorHandler = handler;
    }
  
    /**
     * GET类型的网络请求
     */
    getRequest(url, data, header = this._header) {
      return this.requestAll(url, data, header, 'GET')
    }
  
    /**
     * DELETE类型的网络请求
     */
    deleteRequest(url, data, header = this._header) {
      return this.requestAll(url, data, header, 'DELETE')
    }
  
    /**
     * PUT类型的网络请求
     */
    putRequest(url, data, header = this._header) {
      return this.requestAll(url, data, header, 'PUT')
    }
  
    /**
     * POST类型的网络请求
     */
    postRequest(url, data, header = this._header) {
      return this.requestAll(url, data, header, 'POST')
    }
  
    /**
     * 网络请求
     */
    requestAll(url, data, header, method) {
      return new Promise((resolve, reject) => {
        wx.request({
          url: BaseUrl + url,
          data: data,
          header: header,
          method: method,
          success: (res => {
            if (res.statusCode === 200) {
                //200: 服务端业务处理正常结束
              resolve(res.data)
            } else {
                //其它错误，提示用户错误信息
              if (this._errorHandler != null) {
              //如果有统一的异常处理，就先调用统一异常处理函数对异常进行处理
                this._errorHandler(res)
              }
              reject(res)
            }
          }),
          fail: (res => {
            if (this._errorHandler != null) {
              this._errorHandler(res)
            }
            reject(res)
          })
        })
      })
    }
  }
  
  export default request
  