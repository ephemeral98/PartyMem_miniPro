// components/newsCard/newsCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     title:{
       type:String,
       value:'未传递标题'
     },
     src:{
       type:String,
       value:'',
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newsList: [
      { title: '习近平新时代中国特色社会主义思想' },
      { title: '科学发展观' },
      { title: '三个代表重要思想' },
      { title: '邓小平理论' },
      { title: '毛泽东思想' },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
     goTo(){
       wx.navigateTo({
         url: '/pages/news/news',
       })
     } 
  }
})
