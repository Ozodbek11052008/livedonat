const mongoose = require('mongoose')
const streamPayment = mongoose.Schema({
    payer: {
        type: String,

    },

    text: {
        type: String,
      
    },
    amount: {
        type : Number,

    },
    streamer: {
        type: mongoose.Schema.ObjectId,
        ref: "sreamer",
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("streamPay", streamPayment)