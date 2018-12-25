// pages/MusicProject/MusicProject.js
const app = getApp();
Page({
  //点赞
  dianzhan:function(event){
    // console.log(this.data.classone);
    if (this.data.classone =="iconfont icon-dianzan_active-copy grey"){
 this.setData({
      classone: 'iconfont icon-dianzan_active-copy red',
    })
    }else{
      this.setData({
        classone: 'iconfont icon-dianzan_active-copy grey',
      })
    }
  },
  //取消点赞
  quxiaodianzhan: function (event) {
    //console.log(this.data.classone);
    if (this.data.classtwo == "iconfont icon-dianzan_active grey") {
      this.setData({
        classtwo: 'iconfont icon-dianzan_active red',
      })
    } else {
      this.setData({
        classtwo: 'iconfont icon-dianzan_active grey',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    classone:'iconfont icon-dianzan_active-copy grey',
    classtwo:'iconfont icon-dianzan_active grey',
    // focus: false,
    // inputValue: ''
    content3:'content3',
    xian4:'xian4',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


  // bindButtonTap() {
  //   this.setData({
  //     focus: true
  //   })
  // },
  // bindKeyInput(e) {
  //   this.setData({
  //     inputValue: e.detail.value
  //   })
  // },
  // bindReplaceInput(e) {
  //   const value = e.detail.value
  //   let pos = e.detail.cursor
  //   if (pos != -1) {
  //     // 光标在中间
  //     const left = e.detail.value.slice(0, pos)
  //     // 计算光标的位置
  //     pos = left.replace(/11/g, '2').length
  //   }

  //   // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
  //   return {
  //     value: value.replace(/11/g, '2'),
  //     cursor: pos
  //   }

  //   // 或者直接返回字符串,光标在最后边
  //   // return value.replace(/11/g,'2'),
  // }
})