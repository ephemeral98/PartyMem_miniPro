// 云函数入口文件
const cloud = require('wx-server-sdk')
console.log('hello, 调用！');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  console.log('addData函数调用!!')
  return {
    sum: event.a + event.b
  }
}