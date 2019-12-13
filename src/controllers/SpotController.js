const Spot = require("../models/Spot"),
    User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { company, price, techs } = req.body,
            { filename } = req.file,
            { user_id } = req.headers,
            user = await User.findById(user_id);

        if (!user)
            return res.status(400).json({ error: "User does not exists" });

        let spot = await Spot.findOne({ company: company });

        if (!spot) {
            spot = await Spot.create({
                user: user_id,
                thumbnail: filename,
                company: company,
                price: price,
                techs: techs.split(",").map(tech => tech.trim())
            });
        }

        return res.json(spot);
    },
    async index(req, res) {
        const { tech } = req.query,
            spot = await Spot.find({ techs: tech });

        if (!spot.length)
            return res.json({
                message: "Sorry! But not exists company with this tech!!"
            });

        return res.json(spot);
    }
};
