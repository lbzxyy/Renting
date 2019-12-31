Component({
  data: {
    selected: 0,
    "color": "#878D99",
    "selectedColor": "#475266",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "https://cdn-1.sofb.com/sofb-miniprogram/static/imgs/tab_icon_record@3x.png",
      selectedIconPath: 'https://cdn-1.sofb.com/sofb-miniprogram/static/imgs/tab_icon_record_selected@3x.png',
      text: "首页"
    }, {
      pagePath: "/pages/logs/logs",
      iconPath: 'https://cdn-1.sofb.com/sofb-miniprogram/static/imgs/tab_icon_info@3x.png',
      selectedIconPath: 'https://cdn-1.sofb.com/sofb-miniprogram/static/imgs/tab_icon_info_selected@3x.png',
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})