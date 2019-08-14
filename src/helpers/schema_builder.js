var mongoose = require('mongoose');

var Schema = mongoose.Schema;

module.exports ={
    schemaBuilder: (model, settings = {}) => {
    let defaults = {
        versionKey: false,
        toObject: {
            transform: function(doc, ret, options) {
                let id = ret._id;
                delete ret._id;
                return { id: id, ...ret };
            }
        }
    };

    settings = {...settings, ...defaults};
    return new Schema(model, settings);
}}