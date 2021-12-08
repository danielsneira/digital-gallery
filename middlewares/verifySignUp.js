import Artist from "../models/artist.js";

const checkDuplicateEmail = (req, res, next) => {
  Artist.findOne({
    email: req.body.email,
  }).exec((err, artist) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (artist) {
      res.status(400).send({ message: "Email is already in use" });
      return;
    }

    next();
  });
};

export default checkDuplicateEmail;
