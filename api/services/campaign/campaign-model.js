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

// Tell mongoose to use native promises
// See http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

// Connect to your MongoDB instance(s)
mongoose.connect('mongodb://base2ind:##21gesineMH##@ds119608.mlab.com:19608/4thletes');