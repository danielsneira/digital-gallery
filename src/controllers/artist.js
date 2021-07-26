import Artist from "../models/artist.js";

const artistControllers = {
  signUp: async (req, res) => {
    const { fullname, email, password, rol } = req.body;
    const artist = new Artist({ fullname, email, password });

    const salt = bcrypt.genSaltSync();
    artist.password = bcrypt.hashSync(password, salt);

    await artist.save();

    res.json({
      Artist: artist,
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const Artist = await Artist.findOne({ email });
    if (!Artist) {
      return res.json({
        msg: "Artist not found",
      });
    }

    const validarPassword = bcrypt.compareSync(password, Artist.password);
    if (!validarPassword) {
      return res.status(400).json({
        msg: "Artist o clave incorrecta",
      });
    }

    res.json({
      Artist,
      token,
    });
  },
};

export default artistControllers;
