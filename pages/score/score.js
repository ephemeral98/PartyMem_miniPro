// pages/score/score.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
        menus:[
          {
            menuName:'思想先进',
            menuItem:[
              {
                icon:'/static/icon/score-1.png',
                url:'/pages/sanhuiyike/sanhuiyike',
                name:'自觉学习'
              },
              {
                icon:'/static/icon/score-2.png',
                url: '',
                name: '组织生活'
              },
              {
                icon: '/static/icon/score-3.png',
                url: '',
                name: '读书活动'
              },
              {
                icon: '/static/icon/score-4.png',
                url: '',
                name: '个人荣誉'
              },
            ]
          },
          {
            menuName: '专业过硬',
            menuItem: [
              {
                icon: '/static/icon/score-5.png',
                url: '',
                name: '认真上课'
              },
              {
                icon: '/static/icon/score-6.png',
                url: '',
                name: '技能竞赛'
              },
              {
                icon: '/static/icon/score-7.png',
                url: '',
                name: '创新创业'
              },
              {
                icon: '/static/icon/score-8.png',
                url: '',
                name: '学术论文'
              },
              {
                icon: '/static/icon/score-9.png',
                url: '',
                name: '讲党课'
              }
            ]
          },
          {
            menuName: '乐于奉献',
            menuItem: [
              {
                icon: '/static/icon/score-10.png',
                url: '',
                name: '帮助学生学业'
              },
              {
                icon: '/static/icon/score-11.png',
                url: '',
                name: '关心学生生活'
              },
              {
                icon: '/static/icon/score-12.png',
                url: '',
                name: '公益活动'
              }
            ]
          },
        ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
