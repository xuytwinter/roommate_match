// pages/login/login.js
Page({
    data: {
      name: ''
    },
  
    buttonHandler(event) {
      if (!event.detail.userInfo) {
        wx.showToast({
          title: '授权失败，请重试',
          icon: 'none'
        });
        return;
      }
      this.setData({
        name: event.detail.userInfo.nickName
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success',
     //   duration: 1500, 
        success: () => {
          wx.navigateTo({
            url: '/pages/profile/profile'  // 目标页面路径
          });
        }
      });
    },



  onLoad: function () {
    // 页面加载时可以尝试获取已保存的用户信息
    const that = this;
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        that.setData({
          userInfo: res.data
        });
      }
    });
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // getUserProfile() {
  //   wx.getUserProfile({
  //     desc: '获取用户信息',
  //     success: res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       });
  //       wx.navigateTo({ url: '../profile/profile' });
  //     }
  //   });
  // }
})