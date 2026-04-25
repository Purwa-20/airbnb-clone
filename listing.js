const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ListingSchema = new Schema({
    title: {
    type: String,
    required: true,
    },

    description: String,

     image: {
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=735&auto=format&fit=crop"
          : v,
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },

    price: Number,
    location: String,
    country: String,

});

const Listing  = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
