const mongoose = require('mongoose');

// 定义分类数据模型
const Schema = new mongoose.Schema({
  name: {type: String},
  avatar: {type: String},
  // 称号
  title: {type: String},
  // banner
  banner: {type: String},
  // 类别
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
  // 分数
  scores: {
    // 难度
    diffcult: {type: Number},
    // 技能
    skills: {type:Number },
    attack: {type:Number },
    survive: {type:Number },
  },
  // 技能
  skills: [{
    icon: {type: String},
    name: {type: String},
    cd: {type: String},
    description: {type: String},
    tips: {type: String},
  }],
  // 装备出装
  items1: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  items2: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  // 使用技巧
  usageTips: {type: String},
  // 对抗技巧
  battleTips: {type: String},
  // 团战思路
  teamTips: {type: String},
  // 搭档
  partners: [{
    hero: {type: mongoose.SchemaTypes.ObjectId, ref: "Hero"},
    description: {type: String}
  }]



})

module.exports = mongoose.model('Hero', Schema, 'heroes');