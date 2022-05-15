const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
       email: String,
       userName: String,
       password: String,
       Favourites: { type: Schema.Types.ObjectId, ref: "Favourites" },
       WillRead: { type: Schema.Types.ObjectId, ref: "WillRead" },
       HaveRead: { type: Schema.Types.ObjectId, ref: "HaveRead" },
       admin: Boolean
    }
);

const User = mongoose.model("User", UserSchema)
module.exports = User