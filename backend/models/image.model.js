const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    pjID: {type: Number},
    title: {type: String},
    author: {type: String},
    date: {type: Date},
    faves: {type: Number},
    desc: {type: String},
    tags: {type: Array},
    colorCount: {type: Number},
    colors: {type: Array},
    height: {type: Number},
    sizeMinTrans: {type: Number},
    trans: {type: Boolean},
    width: {type: Number}
})

const imageModel = mongoose.model('Image', imageSchema, 'pixeldb');

module.exports = imageModel;