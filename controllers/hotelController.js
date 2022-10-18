const HotelService = require('../services/hotelService');


const fetchHotels = async (req, res) => {
    const { id } = req.params;

    const hotels = await HotelService.fetchHotels(id);

    res.status(200).send(hotels)
}


module.exports = {
    fetchHotels
}