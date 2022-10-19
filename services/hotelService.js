const HotelRepo = require('../repositories/hotelRepository');

const fetchHotels = async () => {
    const hotels = await HotelRepo.getHotelsCollection();

    return hotels.toJSON();
};

const fetchTargetHotel = async id => {
    const hotel = await HotelRepo.getHotelById(id);

    return hotel.toJSON();
}

module.exports = {
    fetchHotels,
    fetchTargetHotel
}