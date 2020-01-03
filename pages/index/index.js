
import { getHouseList } from "../../api/home/index"

Page({
  data:{
    rentType: 'house', // 默认选中二手房  样式标示
    houseList: [], // 二手房房源数据
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.getHouseList(1); // 获取二手房房源数据
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
   
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  // 切换 租房类型
  switchType: function(e) {
    this.setData({
      rentType: e.currentTarget.dataset.type
    })
  },
  // 获取二手房数据
  getHouseList: function(pageNum) {
    let params = {
      currentPage: pageNum,
      keyword: "",
      condition: ""
    };
    getHouseList(params).then( res => {
      console.log(res,'res')
      const {data: {items: houseList}} = res;
      if(pageNum === 1) {
        this.setData({
          houseList
        })
      }
    })
  }

})