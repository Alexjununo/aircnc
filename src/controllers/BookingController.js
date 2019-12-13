const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers,
            { spot_id } = req.params,
            { date } = req.body;

        let booking = await Booking.findOne({
            user: user_id,
            spot: spot_id,
        });

        if (!booking)
            booking = await Booking.create({
                date: date,
                approved: null,
                user: user_id,
                spot: spot_id,
            });

        await booking
            .populate('spot')
            .populate('user')
            .execPopulate();

        return res.json(booking);
    },
};
