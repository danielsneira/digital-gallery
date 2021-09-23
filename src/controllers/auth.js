import secret from "../config/auth.config";
import Artist from "../models/artist";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const authControllers = {
  signUp: async (req, res) => {
    const { fullname, email, password } = req.body;
    console.log(req.body)
    const artist = new Artist({ fullname, email, password });

    const salt = bcrypt.genSaltSync();
    artist.password = bcrypt.hashSync(password, salt);

    await artist.save();

    res.json({
      artist,
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const artist = await Artist.findOne({ email });
    if (!artist) {
      return res.status(400).json({
        msg: "invalid email",
      });
    }

    const validarPassword = bcrypt.compareSync(password, artist.password);
    if (!validarPassword) {
      return res.status(400).json({
        msg: "invalid password",
      });
    }

    const token = jwt.sign({ id: artist.id }, secret, { expiresIn: "1d" });

    res.json({
      artist,
      token,
    });
  },
};

export default authControllers;
