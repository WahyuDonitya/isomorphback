const { mongoose, Schema } = require("mongoose");

const HeroesSchema = new Schema({
    // diingat2 bahwa _id adalah mongoose.Types.ObjectId
    id: Number,
    name: String,
    localized_name: String,
    primary_attr: String,
    attack_type: String,
    roles: [String],
    legs: Number,
});

/**
 * Parameter ketiga model adalah nama collection di mongodb mu
 * Karena kalau tidak nanti dia mengasumsikan collection di mongodb mu adalah penggunas
 */
const Heroes = mongoose.model("heroes", HeroesSchema, "heroes");

module.exports = Heroes;