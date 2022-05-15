const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FavouritesSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    }
);

const Favourites = mongoose.model("Favourites", FavouritesSchema)
module.exports = Favourites