// pages/study/study.js
Page({
  data: {
    active: 0,
    newsList: [{
        title: '习近平新时代中国特色社会主义思想',
        src: '/static/image/a.jpg'
      },
      {
        title: '科学发展观',
        src: '/static/image/b.png'
      },
      {
        title: '三个代表重要思想',
        src: '/static/image/c.jpg'
      },
      {
        title: '邓小平理论',
        src: '/static/image/b.png'
      },
      {
        title: '毛泽东思想',
        src: '/static/image/b.png'
      },
    ]
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  }
});