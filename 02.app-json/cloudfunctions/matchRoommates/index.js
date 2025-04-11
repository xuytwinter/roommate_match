// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
// const db = cloud.database();

// exports.main = async (event, context) => {
//   const { userProfile } = event; // 获取传入的用户资料

//   // 从数据库中获取所有用户的资料
//   const res = await db.collection('user_profiles').get();
//   const profiles = res.data;

//   // 匹配逻辑：可以根据作息、性格等来做匹配
//   const matchedUsers = profiles.filter(profile => {
//     return profile.sleepHabit === userProfile.sleepHabit &&
//            profile.personality === userProfile.personality;
//   });

//   return {
//     matchedUsers
//   };
// };
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();



// function calculateMatchScore(user1, user2) {
//   // 定义匹配条件和权重
//   const weights = {
//     personality: 0.4,
//     sleepTime: 0.3,
//     dormHabit: 0.3
//   };

//   let totalScore = 0;

//   // 计算 personality 匹配分数
//   let personalityScore = (user1.personality === user2.personality) ? 1 : 0;
//   totalScore += personalityScore * weights.personality;

//   // 计算 sleepTime 匹配分数
//   let sleepTimeScore = getSleepTimeScore(user1.sleepTime, user2.sleepTime);
//   totalScore += sleepTimeScore * weights.sleepTime;

//   // 计算 dormHabit 匹配分数
//   let dormHabitScore = (user1.dormHabit === user2.dormHabit) ? 1 : 0;
//   totalScore += dormHabitScore * weights.dormHabit;

//   return totalScore;
// }

exports.main = async (event, context) => {
  const { userProfile } = event;

  try {
    console.log('开始匹配逻辑', userProfile);

    const existingRecord = await db.collection('user_profiles')
      .where({
        name: userProfile.name,
        contact: userProfile.contact,
        sleepTime: userProfile.sleepTime,
        personality: userProfile.personality,
        preferredPersonality: userProfile.preferredPersonality,
        dormHabit: userProfile.dormHabit,
      })
      .get();

    if (existingRecord.data.length === 0) {
      await db.collection('user_profiles').add({ data: userProfile });
      console.log('已添加新用户');
    } else {
      console.log('用户已存在，跳过添加');
    }

    const matchedUsers = await db.collection('user_profiles')
      .where({
        sleepTime: userProfile.sleepTime,
        preferredPersonality: userProfile.personality,
      })
      .field({ name: true, contact: true }) 
      .get();

    const filteredUsers = matchedUsers.data.filter(u => u.name !== userProfile.name);

    console.log('匹配结果:', filteredUsers);

    return {
      matchedUsers: filteredUsers,
      message: filteredUsers.length > 0 ? '匹配成功' : '暂无匹配的舍友',
    };
  } catch (err) {
    console.error('云函数执行失败:', err);
    return {
      success: false,
      error: err.message || '未知错误',
    };
  }
};




