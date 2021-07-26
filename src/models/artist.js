import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
  fullname: { type: String, required: true, maxLength: 50 },
  email: { type: String, unique: true, maxLength: 50 },
  password: { type: String, required: true },
  following: [
    {
      artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required: true,
      },
    },
  ],
  followers: [
    {
      artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required: true,
      },
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Artist", artistSchema);
