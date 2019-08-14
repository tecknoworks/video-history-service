const schemaBulder = require('../helpers/schema_builder').schemaBuilder
const mongoose = require('mongoose')

module.exports= mongoose.model('history_record', schemaBulder({
    userId: String,
    screenplayId: String,
    screenplayType: String,
    time: Number,
    videoDuration: Number
}))