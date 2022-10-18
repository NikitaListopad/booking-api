const HotelRepo = require('../repositories/hotelRepository');

const fetchHotels = async id => {
    const hotels = await HotelRepo.getHotelsCollection(id);

    return hotels.toJSON();
}

module.exports = {
    fetchHotels,
}