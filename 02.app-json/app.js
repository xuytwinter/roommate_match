//App({});
App({
  globalData: {
    userInfo: null
  },
  onLaunch() {
    console.log('小程序启动')
    wx.cloud.init({
      env: 'cloud1-3gzvp93c6ada93f6', // 这里替换成你自己的云环境ID
      traceUser: true,  // 可选，设置为true以便记录用户的行为
    });
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        this.globalData.userInfo = res.result.userInfo;
      },
      fail: err => {
        console.error('登录失败', err);
      }
    });
  }
});

//z作息（晚睡，早睡）和我是内向的外向的，希望的舍友是内向的外向的，习惯在宿舍学习还是在宿舍娱乐放松，是否打鼾，是否能接受别人打鼾