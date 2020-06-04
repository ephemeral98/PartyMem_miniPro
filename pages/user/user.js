// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //中间部分的菜单
    menus: [{
      icon: '/static/icon/user1.png',
      url: '',
      title: '我的义工活动'
    },
    {
      icon: '/static/icon/user2.png',
      url: '',
      title: '党群服务中心'
    },
    {
      icon: '/static/icon/user3.png',
      url: '',
      title: '缴纳党费'
    }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '当前页面'
      })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})