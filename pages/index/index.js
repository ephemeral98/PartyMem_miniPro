//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    msg: [{
        title: "联系人",
        desc: "Sivan"
      },
      {
        title: "联系方式",
        desc: "11111111111"
      },
      {
        title: "联系地址",
        desc: "深圳信息职业技术学院科技楼"
      }
    ],
    active: 0,
    markers: [{
      latitude: 22.683905,
      longitude: 114.214715,
      iconPath: '/static/icon/hongqi.png',
      width: 30,
      height: 30
    }]
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  },

  onLoad: function (e) {
    //初始化云服务
    wx.cloud.init()
    console.log('云服务初始化成功')
    console.log('云服务函数的调用')
    

    wx.cloud.callFunction({
      // 云函数名称
      name: 'addData',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function (res) {
        console.log('调用的结果返回')
        console.log(res.result.sum) // 3
        const temp = require('../../functions/addData/index.js');
      },
      fail: console.error
    })
  }
});