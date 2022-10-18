const { Hotel: HotelModel } = require('../models/hotelModel');
// const { v4: uuid } = require('uuid')

const getHotelsCollection = async id => {
    const hotelsPromise = await HotelModel.fetchAll();

    return hotelsPromise;
}

module.exports = {
    getHotelsCollection,
}