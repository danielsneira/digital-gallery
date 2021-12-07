import Art from "../models/art.js";

const artControllers = {
  getArt: async (req, res) => {
    const art = await Art.find().populate("artist", "fullname").populate({
      path: 'comments',
      populate: {
        path: "artist",
        model: "Artist"
      } 
    }).sort('-createdAt');

    res.json(art);
  },

  getArtByArtist: async (req, res) => {
    const { id } = req.params;
    const art = await Art.find({artist: id}).populate("artist", "fullname")

    res.json(art);
  },

  artPost: async (req, res) => {
    const { artist, caption, image } = req.body;

    const art = new Art({ artist, caption, image });
    await art.save();

    res.json({
      art,
    });
  },

  artComment: async (req, res) => {
    const { artId, artist, comment } = req.body;

    const newComment = { artist: artist, comment: comment };
    // add comment to art
    const art = await Art.findByIdAndUpdate(artId, { $push: {comments: newComment} });
    
    await art.save();

    res.json({
      art,
    });
  },

  artToggleLike: async (req, res) => {
    const { artId, artist, like } = req.body;
    let art;

    if (like){
    // add like to art
    art = await Art.findByIdAndUpdate(artId, { $push: {likes: artist} });
    
  } else {
      art = await Art.findByIdAndUpdate(artId, { $pull: {likes: artist} });
    }
    await art.save();

    res.json({
      art,
    });
  },
};

export default artControllers;
