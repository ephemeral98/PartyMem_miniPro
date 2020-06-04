// pages/sanhuiyike/sanhuiyike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: '',
    location: '',
    content: '',
    time: '',
    show: false, //弹出层绑定的变量，ture为显示，false为隐藏
    minDate: new Date().getTime(),
    maxDate: new Date(2020, 10, 1).getTime(),
    //  当前时间
    currentDate: new Date().getTime(),
    fileList:[],
  },
  //选择图片完成,开始上传
  afterRead(event) {
    const { file } = event.detail; 
    //当设置mutiple 为true时，file 为数组格式，否则为对象格式
    console.log(file)
    wx.cloud.uploadFile({
    //指定上传到的云路径
    cloudPath:`cloudPath/${new Date().getTime()}.png`,
    //指定要上传的文件的小程序临时文件路径
    filePath: file.path,
    //成功回调
    success: res => {
    console.log('上传成功',res)
    },
    fail: console.error,
    })
    },    
//查询所有的数据
selectAllData() {
  let db = wx.cloud.database().collection('score_item')
  //查询所有数据
  db.where({
    _openid: 'user-open-id',
  }).get().then(res => {
    console.log(res.data)
    //箭头函数的引用.
    res.data.map((value, index) => {
      //模版字符串es6的新特性
      console.log('数组下标' + index)
      console.log('记录的值')
      console.log(value)
    })
  })

},
// 时间格式化
formatDateTime(inputTime) {
  let date = new Date(inputTime);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
},
// 时间确定选择
onConfirm(event) {
  console.log(event)
  //保存当前的时间戳 let var
  let cureentTimeStap = event.detail
  let cureentdate = this.formatDateTime(cureentTimeStap)
  console.log(cureentdate)
  this.setData({
    time: cureentdate
  })
  this.showPopup()
},
//打开弹出层
showPopup() {
  //修改弹出层绑定的变量
  this.setData({
    show: !this.data.show
  });
},
//时间选择
onInput(event) {
  this.setData({
    currentDate: event.detail
  });
},
save() {
  console.log('data=')
  console.log(this.data)
  let scoreFormData = this.data
  //初始化连接到数据库
  const db = wx.cloud.database()
  //获取到集合到名称操作对象，选择数据表
  let scoreItem = db.collection('score_item')
  //添加
  scoreItem.add({
    data: {
      //事件的名称
      'name': '自觉学习',
      'form': scoreFormData,
    }
  }).then(res => {
    //es6的箭头函数
    console.log('插入结果${res.id}')
  }),
    this.selectAllData()
},
onChange(event) {
  //event.detail 为当前输入的值
  console.log(event.detail);
  this.setData({
    'subject': event.detail
  })
},
onTimeChange(event) {
  //event.detail 为当前输入的值
  console.log(event.detail);
  this.setData({
    'time': event.detail
  })
},
onLocationChange(event) {
  //event.detail 为当前输入的值
  console.log(event.detail);
  this.setData({
    'location': event.detail
  })
},
onContentChange(event) {
  //event.detail 为当前输入的值
  console.log(event.detail);
  this.setData({
    'content': event.detail
  })
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function(options) {
  wx.cloud.init();
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