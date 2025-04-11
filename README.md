# Uni-House：基于 Uniapp 的舍友匹配小程序

![Uni-House Banner](https://img.shields.io/badge/Platform-Uniapp-brightgreen)
![Status](https://img.shields.io/badge/Project-Completed-blue)

## 📌 项目简介

**Uni-House** 是一款基于 Uniapp 框架开发的小程序，旨在帮助大学生通过填写问卷，智能匹配最合适的舍友。系统将用户的个性、作息、兴趣等信息录入后，通过匹配算法与推荐系统，实现高效、智能的舍友配对，并支持基本的沟通功能。

## ✨ 项目功能

- 🧑‍💻 用户登录与身份认证（支持微信授权）
- 📄 问卷填写（性格、作息、兴趣等）
- 🔍 智能匹配舍友（基于匹配算法）
- 📢 推荐系统展示匹配结果
- 💬 简单沟通平台（消息推送）
- 🧠 用户信息处理与云端存储

## 🔧 技术栈

| 模块             | 技术                                |
| ---------------- | ----------------------------------- |
| 前端开发         | Uniapp, HTML, CSS, JavaScript       |
| 云数据库         | Firebase / Firestore                |
| 用户认证         | Firebase Auth / Auth0               |
| 消息推送         | Firebase Cloud Messaging            |
| 匹配算法         | Python, Node.js                     |
| 云函数（服务端） | wx.cloud.callFunction（微信云开发） |

## 🧩 模块设计与结构

### 1. 用户登录模块
- 支持微信登录与信息授权
- 获取头像和昵称展示
- 登录信息保存在云端

### 2. 问卷调查模块
- 填写作息、性格、兴趣等信息
- 表单验证（必填项校验）
- 数据通过云函数存储至数据库

### 3. 匹配算法模块
- 基于相似度和权重算法
- 使用 Node.js + Python 执行逻辑处理

### 4. 推荐模块
- 将推荐结果可视化展示给用户
- 前端使用卡片式设计直观显示匹配详情

### 5. 沟通平台模块
- 提供基本消息功能（Firebase 消息推送）
- 后期支持扩展为即时聊天窗口

## 🧪 使用方式（本地开发）

1. 克隆仓库：
   ```bash
   https://github.com/xuytwinter/roommate_match.git