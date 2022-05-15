const mongoose = require("mongoose");
const Schema = mongoose.Schema

const HaveReadSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    }
);

const HaveRead = mongoose.model("HaveRead", HaveReadSchema)
module.exports = HaveRead