// pages/aixin/aixin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //中间部分的菜单
    menus: [{
        icon: '/static/icon/menu1.png',
        url: '/pages/score/score',
        title: '领取积分'
      },
      {
        icon: '/static/icon/menu2.png',
        url: '',
        title: '积分规则'
      },
      {
        icon: '/static/icon/menu3.png',
        url: '',
        title: '更换肖像'
      },
      {
        icon: '/static/icon/menu4.png',
        url: '',
        title: '积分奖励'
      },
      {
        icon: '/static/icon/menu5.png',
        url: '/pages/share/share',
        title: '分享肖像'
      }
    ],
    //分数
    score: [{
        name: '全部',
        group:[
          {
            title: '目前总分',
            value: 100,
          },
          {
            title:'思想先进',
            value:10,
          },
          {
            title: '专业过硬',
            value: 20,
          },
          {
            title: '乐于奉献',
            value: 30,
          }
        ]
      },
      {
        name: '领取',
        group:[]
      },
      {
        name: '得分',
        group: [
          {
            title: '思想先进',
            value: 10,
          },
          {
            title: '专业过硬',
            value: 20,
          },
          {
            title: '乐于奉献',
            value: 30,
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})