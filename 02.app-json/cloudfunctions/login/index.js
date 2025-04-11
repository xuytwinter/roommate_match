const cloud = require('wx-server-sdk');
cloud.init();

// 获取用户信息并存储到数据库
exports.main = async (event, context) => {
  const db = cloud.database();
  const usersCollection = db.collection('users');
  const { userInfo } = event;
  const wxContext = cloud.getWXContext();
  const openid = wxContext.OPENID;

  try {
    // 检查用户是否已经存在
    const existingUser = await usersCollection.where({ _openid: openid }).get();
    
    if (existingUser.data.length === 0) {
      // 如果用户不存在，插入新的用户数据
      await usersCollection.add({
        data: {
          _openid: openid,
          name: userInfo.nickName,
          avatar: userInfo.avatarUrl,
          gender: userInfo.gender,
          city: userInfo.city,
          country: userInfo.country,
          province: userInfo.province,
          createTime: new Date()
        }
      });
    }
    
    return {
      success: true,
      message: '用户信息存储成功',
    };
  } catch (e) {
    return {
      success: false,
      message: e.message,
    };
  }
};
