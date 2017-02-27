var mongoose = require("mongoose");

var targetSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isLiving: {
        type: Boolean,
        required: true,
    },
    team: String
});


var Target = mongoose.model("Target", targetSchema);

module.exports = Target;