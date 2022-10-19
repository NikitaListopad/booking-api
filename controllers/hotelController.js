const HotelService = require('../services/hotelService');


const fetchHotelsCollection = async (req, res) => {
    const hotels = await HotelService.fetchHotels();

    res.status(200).send(hotels)
}

const fetchHotel = async (req, res) => {
    const { id } = req.params;

    const hotel = await HotelService.fetchTargetHotel(id);

    res.status(200).send(hotel)
}

module.exports = {
    fetchHotelsCollection,
    fetchHotel
}