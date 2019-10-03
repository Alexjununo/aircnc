const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers,
            spots = await Spot.find({ user: user_id });

        if(!spots.length)
            return res.json({ message: "Not exists spots for this user" });

        return res.json(spots);
    }
}