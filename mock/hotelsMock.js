const {v4: uuid} = require('uuid')

const hotelsName = [
    "nar",
    "An",
    "Alfr",
    "Alvi",
    "Ari",
    "Arinbjorn",
    "Arngeir",
    "Arngrim",
    "Arnfinn",
    "Asgeirr",
    "Askell",
    "Asvald",
    "Bard",
    "Baror",
    "Bersi",
    "Borkr",
    "Bjarni",
    "Bjorn",
    "Brand",
    "Brandr",
    "Cairn",
    "Canute",
    "Dar",
    "Einarr",
    "Eirik",
    "Egill",
    "Engli",
    "Eyvindr",
    "Erik",
    "Eyvind",
    "Finnr",
    "Floki",
    "Fromund",
    "Geirmundr",
    "Geirr",
    "Geri",
    "Gisli",
    "Gizzur",
    "Gjafvaldr",
    "Glumr",
    "Gorm",
    "Grmir",
    "Gunnarr",
    "Guomundr",
    "Hak",
    "Halbjorn",
    "Halfdan",
    "Hallvard",
    "Hamal",
    "Hamundr",
    "Harald",
    "Harek",
    "Hedinn",
    "Helgi",
    "Henrik",
    "Herbjorn",
    "Herjolfr",
    "Hildir",
    "Hogni",
    "Hrani",
    "Ivarr",
    "Hrolf",
    "Jimmy",
    "Jon",
    "Jorund",
    "Kalf",
    "Ketil",
    "Kheldar",
    "Klaengr",
    "Knut",
    "Kolbeinn",
    "Kolli",
    "Kollr",
    "Lambi",
    "Magnus",
    "Moldof",
    "Mursi",
    "Njall",
    "Oddr",
    "Olaf",
    "Orlyg",
    "Ormr",
    "Ornolf",
    "Osvald",
    "Ozurr",
    "Poror",
    "Prondir",
    "Ragi",
    "Ragnvald",
    "Refr",
    "Runolf",
    "Saemund",
    "Siegfried",
    "Sigmundr",
    "Sigurd",
    "Sigvat",
    "Skeggi",
    "Skomlr",
    "Slode",
    "Snorri",
    "Sokkolf",
    "Solvi",
    "Surt",
    "Sven",
    "Thangbrand",
    "Thjodoft",
    "Thorod",
    "Thorgest",
    "Thorvald",
    "Thrain",
    "Throst",
    "Torfi",
    "Torix",
    "Tryfing",
    "Ulf",
    "Valgaror",
    "Vali",
    "Vifil",
    "Vigfus",
    "Vika",
    "Waltheof"
];

const hotelImages = [
    'https://www.ihgplc.com/-/media/ihg/images/brands/regent/regent_carousel_1.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/23/3b/e0/13/oz-hotels-side-premium.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/1b/ef/1b/bc/oz-hotels-antalya-resort.jpg',
    'https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london.jpg',
    'https://www.fortispayments.com/wp-content/uploads/2019/03/pool-for-google-blog.jpg',
    'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/izeD0hHEwWUc/v0/1000x-1.jpg',
    'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
    'https://www-media.woodspring.com/v1/media/images/wsweb/hotels/WSMAUME/WOODSPRING-SUITES-MAUME-EXTENDED-STAY-HOTEL-EXTERIOR-DAY-2-738X456.jpg',
    'https://assets.tivolihotels.com/image/upload/q_auto,f_auto/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg',
    'https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg'
]

const getRandomData = (dataArray) => {
    return dataArray[Math.floor(Math.random() * dataArray.length)];
}

const getRandomPrice = (max) => {
    return String(Math.floor(Math.random() * max));
}

const generateHotel = () => {
    return {
        id: uuid(),
        title: getRandomData(hotelsName),
        price: getRandomPrice(640),
        photo: getRandomData(hotelImages)
    }
}

const generateHotelsArray = (amount) => {
    const hotels = [];

    const iterations = amount || 20;

    for (let i = 0; i <= iterations; i++) {
        const newHotel = generateHotel();
        hotels.push(newHotel);
    }

    return hotels;
}

const getFilterHotels = (isBigPrice, isBigTitle, hotels) => {

    if (isBigPrice) {
        return hotels.filter(item => Number(item.price) > 500);
    }

    if (isBigTitle) {
        return hotels.filter(item => item.title.length > 5);
    }

    if (!isBigTitle && !isBigPrice) {
        return hotels;
    }

    return [];
}

module.exports = {
    generateHotelsArray,
    getFilterHotels
}
