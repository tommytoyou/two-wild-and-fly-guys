const mongoose = require('mongoose');
// schema class from mongoose
const Schema = mongoose.Schema;
// make a capsule schema

const capsuleSchema = new Schema({
    serial: String,
    type: String,
    waterLandings: Number
});
// Model
const Capsule = mongoose.model('Capsule', capsuleSchema);

mongoose.model.exports = Capsule;