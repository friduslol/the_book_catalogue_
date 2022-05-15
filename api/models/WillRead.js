const mongoose = require("mongoose");
const Schema = mongoose.Schema

const WillReadSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    }
);

const WillRead = mongoose.model("WillRead", WillReadSchema)
module.exports = WillRead