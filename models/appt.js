const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apptSchema = new Schema({
    name:String,
    user_email:String,
    Select1:String,
    Select2:String,
    Test_DatetimeLocal:String
});
const Appt = mongoose.model('Appt', apptSchema);
module.exports = Appt;