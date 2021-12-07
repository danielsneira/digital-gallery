import Artist from "../models/artist.js";

const artistControllers = {
  artistFollow: async (req, res) => {
    const { artistFollower, artistFollowing, follow } = req.body;
    let follower;
    let following;

    if (follow) {
      // add following to artist
      follower = await Artist.findByIdAndUpdate(artistFollower, { $push: { following: {_id: artistFollowing} }, });
      // add follower to artist
      following = await Artist.findByIdAndUpdate(artistFollowing, { $push: { followers: {_id: artistFollower} }, });

    } else {
      // remove following from artist
      follower = await Artist.findByIdAndUpdate(artistFollower, { $pull: { following: {_id: artistFollowing} }, });
      // remove follower from artist
      following = await Artist.findByIdAndUpdate(artistFollowing, { $pull: { followers: {_id: artistFollower} }, });
    }

    await follower.save();
    await following.save();

    res.json({
      follower,
      following
    });
  },
};

export default artistControllers;
