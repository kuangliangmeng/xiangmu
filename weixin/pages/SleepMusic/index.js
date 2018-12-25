// pages/SleepMusic/SleepMusic.js
var data = require('../../utils/data.js').songs;
Page({
  klmbo: function(event) {},
  tab1() {
    this.setData({
      one1: false,
      two1: true,
      three1: true,
      fore1: true,
      five1: true,
      six1: true,
    })
  },
  tab2() {
    this.setData({
      one1: true,
      two1: false,
      three1: true,
      fore1: true,
      five1: true,
      six1: true,
    })
  },
  tab3() {
    this.setData({
      one1: true,
      two1: true,
      three1: false,
      fore1: true,
      five1: true,
      six1: true,
    })
  },
  tab4() {
    this.setData({
      one1: true,
      two1: true,
      three1: true,
      fore1: false,
      five1: true,
      six1: true,
    })
  },
  tab5() {
    this.setData({
      one1: true,
      two1: true,
      three1: true,
      fore1: true,
      five1: false,
      six1: true,
    })
  },
  tab6() {
    this.setData({
      one1: true,
      two1: true,
      three1: true,
      fore1: true,
      five1: true,
      six1: false,
    })
  },
  xianshi: function(event) {
    if (this.data.selectPerson == true) {
      this.setData({
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        music1: 'https://music.163.com/song/media/outer/url?id=405998843.mp3',
        music2: 'https://music.163.com/song/media/outer/url?id=405998842.mp3',
        music3: 'https://music.163.com/song/media/outer/url?id=405998841.mp3',
        ge: '雨水-阳关',
        ge1: '立春-雨来',
        ge2: '谷雨-空山鸟语',
        ge3: '一帘幽梦',
        selectPerson: false,
        selectPerson1: true,
        content: 'content1',
        bg: 'bg1',
        sbg: 'gonbg',
        abg: 'gonbg',
        wbg: 'gonbg',
        zhengti: 'zhengti',
        zhengti1: 'zhengti1',
      })
    } else {
      this.setData({
        selectPerson: true,
        content: 'content',
        bg: 'bg',
        sbg: 'sbg',
        abg: 'abg',
        wbg: 'wbg',
        zhengti: '',
        zhengti1: '',
      })
    }
  },
  xianshi1: function(event) {
    if (this.data.selectPerson == true) {
      this.setData({
        music: 'https://music.163.com/song/media/outer/url?id=405998848.mp3',
        music1: 'https://music.163.com/song/media/outer/url?id=405998847.mp3',
        music2: 'https://music.163.com/song/media/outer/url?id=405998846.mp3',
        music3: 'https://music.163.com/song/media/outer/url?id=405998845.mp3',
        ge: '小满-出水莲',
        ge1: '小暑-石上流泉',
        ge2: '芒种-乌夜啼',
        ge3: '立夏-飞花点翠',
        selectPerson: false,
        selectPerson1: true,
        content: 'content1',
        sbg: 'sbg1',
        bg: 'gonbg',
        abg: 'gonbg',
        wbg: 'gonbg',
        zhengti: 'zhengti',
        zhengti1: 'zhengti1',
      })
    } else {
      this.setData({
        selectPerson: true,
        content: 'content',
        sbg: 'sbg',
        bg: 'bg',
        abg: 'abg',
        wbg: 'wbg',
        zhengti: '',
        zhengti1: '',
      })
    }
  },
  xianshi2: function(event) {
    if (this.data.selectPerson1 == true) {
      this.setData({
        music: 'https://music.163.com/song/media/outer/url?id=405998825.mp3',
        music1: 'https://music.163.com/song/media/outer/url?id=405998839.mp3',
        music2: 'https://music.163.com/song/media/outer/url?id=405998838.mp3',
        music3: 'https://music.163.com/song/media/outer/url?id=405998837.mp3',
        ge: '立秋-月儿高',
        ge1: '秋分-彩云醉月',
        ge2: '处暑-平沙落雁',
        ge3: '寒露-弗雷',
        selectPerson1: false,
        selectPerson: true,
        abg: 'abg1',
      })
    } else {
      this.setData({
        selectPerson1: true,
        abg: 'abg',
      })
    }
  },
  xianshi3: function(event) {
    if (this.data.selectPerson1 == true) {
      this.setData({
        music: 'https://music.163.com/song/media/outer/url?id=405998820.mp3',
        music1: 'https://music.163.com/song/media/outer/url?id=405998821.mp3',
        music2: 'https://music.163.com/song/media/outer/url?id=405998822.mp3',
        music3: 'https://music.163.com/song/media/outer/url?id=405998823.mp3',
        ge: '立冬-月落古刹',
        ge1: '小雪，静观吟',
        ge2: '冬至-梦后',
        ge3: '大寒-梅花三弄',
        selectPerson1: false,
        selectPerson: true,
        wbg: 'wbg1',
      })
    } else {
      this.setData({
        selectPerson1: true,
        wbg: 'wbg',
      })
    }
  },
  kaishi: function(event) {
    if (this.data.bo == "bo") {
      this.setData({
        bo: 'bo1',
        bo1: 'bo',
      })
    } else {
      this.setData({
        bo: 'bo',
        bo1: 'bo1',
      })
    }
  },
  kaishi1: function(event) {
    if (this.data.bo2 == "bo2") {
      this.setData({
        bo2: 'bo3',
        bo3: 'bo2',
      })
    } else {
      this.setData({
        bo2: 'bo2',
        bo3: 'bo3',
      })
    }
  },
  kaishi2: function(event) {
    if (this.data.bo4 == "bo4") {
      this.setData({
        bo4: 'bo5',
        bo5: 'bo4',
      })
    } else {
      this.setData({
        bo4: 'bo4',
        bo5: 'bo5',
      })
    }
  },
  kaishi3: function(event) {
    if (this.data.bo6 == "bo6") {
      this.setData({
        bo6: 'bo7',
        bo7: 'bo6',
      })
    } else {
      this.setData({
        bo6: 'bo6',
        bo7: 'bo7',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
    music1: 'https://music.163.com/song/media/outer/url?id=405998843.mp3',
    music2: 'https://music.163.com/song/media/outer/url?id=405998842.mp3',
    music3: 'https://music.163.com/song/media/outer/url?id=405998841.mp3',
    ge: '乜野系恋爱',
    ge1: '北澤伸一郎 (春心萌动)',
    ge2: '雨水一盒',
    ge3: '一帘幽梦',
    src: '../../images/7.jpg',
    src1: '../../images/9.jpg',
    src2: '../../images/10.jpg',
    src3: '../../images/11.jpg',
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    content: 'content',
    contentman: 'contentman',
     contentman2: 'contentman2',
    selectPerson: true,
    selectPerson1: true,
    one1: false,
    two1: true,
    three1: true,
    fore1: true,
    five1: true,
    six1: true,
    tu: 'tu',
    dabg: 'dabg',
    animationData: {},
    // music: '',
    // music1: '',
    bo: 'bo',
    bo1: 'bo1',
    bo2: 'bo2',
    bo3: 'bo3',
    bo4: 'bo4',
    bo5: 'bo5',
    bo6: 'bo6',
    bo7: 'bo7',
    bofang: '../../images/zan1.png',
    zanfang: '../../images/bo2.png',
    bg: 'bg',
    sbg: 'sbg',
    abg: 'abg',
    wbg: 'wbg',
    zhengti: '',
    zhengti1: '',
    arr: [{
        title: '栖',
        tab: 'tab1',
        zi: 'zi1'
      },
      {
        title: '慢',
        tab: 'tab2',
        zi: 'zi2'
      },
      // {
      //   title: '悦',
      //   tab: 'tab3',
      //   zi: 'zi3'
      // },
      // {
      //   title: '憩',
      //   tab: 'tab4',
      //   zi: 'zi4'
      // },
      // {
      //   title: '梦',
      //   tab: 'tab5',
      //   zi: 'zi5'
      // },
      {
        title: '觉',
        tab: 'tab6',
        zi: 'zi6'
      },
    ],
    arr2: [{
        shu: '1',
        ge1: '风的颜色',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio1',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '2',
        ge1: '珍爱的孩子',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio2',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '3',
        ge1: '落在淡水的孩子',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio3',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '4',
        ge1: '迷人的眼睛',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio4',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '5',
        ge1: '回乡',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio5',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '6',
        ge1: '归乡',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio6',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '7',
        ge1: '戏水',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio7',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '8',
        ge1: '香甜入睡',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio8',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '9',
        ge1: 'Amazing Grace',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio9',
        bofang: '../../images/zan1.png',
      },
    ],

    arr1: [{
        shu: '1',
        ge1: '绿色方舟',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio1',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '2',
        ge1: '飞翔',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio2',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '3',
        ge1: '柔软的水滴',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio3',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '4',
        ge1: '一生玩不够',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio4',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '5',
        ge1: '天上的月亮你的脸',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio5',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '6',
        ge1: '归乡',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio6',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '7',
        ge1: '温暖的家',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio7',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '8',
        ge1: '美丽的索罗河',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio8',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '9',
        ge1: '休息',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio9',
        bofang: '../../images/zan1.png',
      },
    ],

    arr3: [{
        shu: '1',
        ge1: '在水一方',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio1',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '2',
        ge1: '三谷里的居民',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio2',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '3',
        ge1: '为你而来',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio3',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '4',
        ge1: '光阴的小船',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio4',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '5',
        ge1: '白月光',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio5',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '6',
        ge1: '一窗清香',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio6',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '7',
        ge1: '怀恋',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio7',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '8',
        ge1: '那里',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio8',
        bofang: '../../images/zan1.png',
      },
      // {
      //   shu: '9', ge1: 'Amazing Grace', music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3', myAudio: 'klmAudio9', bofang: '../../images/zan1.png',
      // },
    ],


    arr4: [{
        shu: '1',
        ge1: '心曲',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio1',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '2',
        ge1: '念白1',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio2',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '3',
        ge1: '小茉莉',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio3',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '4',
        ge1: '一把小雨伞',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio4',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '5',
        ge1: '风的足迹',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio5',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '6',
        ge1: '走在雨中',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio6',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '7',
        ge1: '天空之城',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio7',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '8',
        ge1: '晚霞',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio8',
        bofang: '../../images/zan1.png',
      },
      {
        shu: '9',
        ge1: '寂静的天空',
        music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3',
        myAudio: 'klmAudio9',
        bofang: '../../images/zan1.png',
      },
      // {
      //   shu: '10', ge1: '但愿人长久', music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3', myAudio: 'klmAudio10', bofang: '../../images/zan1.png',
      // },
      // {
      //   shu: '11', ge1: '往日时光', music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3', myAudio: 'klmAudio11', bofang: '../../images/zan1.png',
      // },
      // {
      //   shu: '12', ge1: '菩提花开', music: 'https://music.163.com/song/media/outer/url?id=405998844.mp3', myAudio: 'klmAudio12', bofang: '../../images/zan1.png',
      // },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var rs = [],
      idsMap = {},
      keys = Object.keys(data),
      len = keys.length;

    for (var i = 0; i < len; i++) {
      var k = keys[i];

      rs.push(Object.assign({
        id: k,
      }, data[k]));

      idsMap[k] = {
        preid: i > 0 ? keys[i - 1] : 0,
        nextid: i < len - 1 ? keys[i + 1] : 0
      }
    }

    idsMap[keys[0]].preid = keys[len - 1];
    idsMap[keys[len - 1]].nextid = keys[0];

    this.setData({
      recommends: rs
    });

    wx.setStorageSync('ids', idsMap);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady(e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx1 = wx.createAudioContext('myAudio1')
    this.audioCtx2 = wx.createAudioContext('myAudio2')
    this.audioCtx3 = wx.createAudioContext('myAudio3')
    this.audioCtx20 = wx.createAudioContext('klmAudio1')
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

  },

  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audioPlay1() {
    this.audioCtx1.play()
  },
  audioPause1() {
    this.audioCtx1.pause()
  },
  audioPlay2() {
    this.audioCtx2.play()
  },
  audioPause2() {
    this.audioCtx2.pause()
  },

  audioPlay3() {
    this.audioCtx3.play()
  },
  audioPause3() {
    this.audioCtx3.pause()
  },
  audioPlay20() {
    this.audioCtx20.play()
  },
  playTap: function (e) {
    const dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../play/index?id=${dataset.id}`
    })
  }
})



















