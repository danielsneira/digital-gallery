import mongoose from "mongoose";

const artSchema = mongoose.Schema({
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist", required: true },
  image: {type: String, required: true},
  caption: { type: String, unique: true, maxLength: 50 },
  likes: [],
  comments: [
    {
      artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required: true,
      },
      comment: { type: String, maxLength: 280},
      createdAt: { type: Date, default: Date.now() },
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});

export default mongoose.model("Art", artSchema);
