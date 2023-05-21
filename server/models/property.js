const mongooose = require("mongoose");

const propertyySchema = new mongooose.Schema({
    email:String,
    purpose:String,
    type:String,
    city:String,
    address:String,
    area:Number,
    unit:String,
    price:Number,
    rooms: Number,
    bath: Number,
    floors: Number,
    installment:Boolean,
    description:String,
    image:[{ type: String }],
    panorama:[{ type: String }],
    agent:Boolean,
});

const property = mongooose.model('PROPERTIES',propertyySchema);

module.exports = property;