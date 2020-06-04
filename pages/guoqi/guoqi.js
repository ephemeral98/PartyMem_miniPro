// pages/guoqi/guoqi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 活动的内容
    active1: [
      {
        id: 1,
        title: '环境提升活动',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587705558994&di=9abe0d9f7b85e4f2d9331a0ba6ca0610&imgtype=0&src=http%3A%2F%2Fwww.jyc.edu.cn%2F__local%2F8%2FD1%2F89%2F1EB5A12B34AC36583A913A955B5_A13C82C1_69FF9D.jpg',
        url: '/pages/guoqipage/guoqipage?id=1'
      },
      {
        id: 2,
        title: '关爱留守儿童',
        src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1384870611,3836970474&fm=26&gp=0.jpg',
        url: '/pages/guoqipage/guoqipage?id=2&uid=3'
      }
    ],
    active2: [],
    active3: [
      {
        title: '"抗疫"期间，绘出精彩',
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=678928164,2758518752&fm=11&gp=0.jpg',
        url: '/pages/web/web?src=https://mp.weixin.qq.com/s/45auiI8oe8XhIl3AfMl0Lg'
      }
    ]
  },
  //拉取活动的函数
  fetchActive() {
    //开始加载中的动画
    wx.showNavigationBarLoading()
    //另存为全局的函数对象
    let that = this
    wx.request({
      url: 'https://devmp.mdysz.cn/index/party/active',
      success(res){
        that.setData({active2:res.data.data})
        //隐藏动画
        wx.hideNavigationBarLoading()
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchActive();
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