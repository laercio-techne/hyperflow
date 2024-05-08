const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const JorneySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nodes: {
    type: Array,
    required: true,
  },
  edges: {
    type: Array,
    required: true,
  },
  segments: {
    type: Object,
    required: true,
  },
  isDynamic: {
    type: Boolean,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  isPaused: {
    type: Boolean,
    required: true,
  },
  isStopped: {
    type: Boolean,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  journeyEntrySettings: {
    type: String,
    required: true,
  },
  journeySettings: {
    type: String,
    required: true,
  },
  latestSave: {
    type: String,
    required: true,
  },
  latestChangerEmail: {
    type: String,
    required: true,
  },
});

const JorneyModel = mongoose.model("Jorneys", JorneySchema);

JorneySchema.plugin(normalize);
module.exports =  JorneyModel;