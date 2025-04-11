// pages/profile/profile.js
Page({
  data: {
    sleepTime: '',
  },

  onSubmit(e) {
    const userProfile = {
      name: e.detail.value.name,
      contact: e.detail.value.contact,
      sleepTime: e.detail.value.sleepTime,
      personality: e.detail.value.personality,
      preferredPersonality: e.detail.value.preferredPersonality,
      dormHabit: e.detail.value.dormHabit,
    };

    if (
      !userProfile.name || !userProfile.contact || 
      !userProfile.sleepTime || 
      !userProfile.personality || 
      !userProfile.preferredPersonality || 
      !userProfile.dormHabit
    ) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    wx.showToast({
      title: '提交成功',
      icon: 'success'
    });

    wx.cloud.callFunction({
      name: 'matchRoommates',
      data: { userProfile },
      success: res => {
        wx.navigateTo({
          url: `/pages/match/match?matchedUsers=${JSON.stringify(res.result.matchedUsers)}&message=${res.result.message}`,
        });
      },
      fail: err => {
        console.error('云函数调用失败', err);
        wx.showToast({
          title: '提交失败',
          icon: 'error',
        });
      },
    });
  },
  onLoad(options) {

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
  // handleInput(e) {
  //   this.setData({
  //     [e.target.id]: e.detail.value
  //   });
  // },
  // submitProfile() {
  //   wx.cloud.database().collection('users').add({
  //     data: this.data,
  //     success: () => {
  //       wx.showToast({ title: '信息提交成功' });
  //       wx.navigateTo({ url: '../match/match' });
  //     }
  //   });
  // }
})