//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    markers:[
       {
        latitude:22.683905,
        longitude:114.214715,
        iconPath:'/static/icon/hongqi.png',
        width:30,
        height:30
       }
    ]
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  }
});