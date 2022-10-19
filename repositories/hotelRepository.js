const { Hotel: HotelModel } = require('../models/hotelModel');
// const { v4: uuid } = require('uuid')

const getHotelsCollection = async () => {
    return  await HotelModel.fetchAll();
}

const getHotelById = async id => {
    return await HotelModel.where('id', id).fetch()
}

module.exports = {
    getHotelsCollection,
    getHotelById,
}