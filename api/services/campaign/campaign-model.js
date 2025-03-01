'use strict';

// campaign-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  type: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const campaignModel = mongoose.model('campaign', campaignSchema);

module.exports = campaignModel;
