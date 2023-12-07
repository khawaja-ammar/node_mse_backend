import express from 'express';

// v1
// const myObj = {
//   currency: 'PKR',
//   properties: [
//     {
//       property_ota: 'Agoda',
//       property_name: 'Pearl Continental',
//       property_imgUrl: '',
//       property_lat: '',
//       property_lng: '',
//       property_rooms: [
//         {
//           room_name: 'Luxury',
//           room_affiliateUrl: 'url',
//           room_priceEXCtax: 50000,
//           room_priceINCtax: 65000,
//           room_freeWifi: true,
//           room_freeCancellation: true,
//           room_breakfastIncluded: false,
//         },
//         {
//           room_name: 'Master',
//           room_affiliateUrl: 'url',
//           room_priceEXCtax: 100000,
//           room_priceINCtax: 120000,
//           room_freeWifi: true,
//           room_freeCancellation: true,
//           room_breakfastIncluded: true,
//         },
//       ],
//     },
//     {
//       property_ota: 'Booking.com',
//       property_name: 'Serena Hotel',
//       property_imgUrl: '',
//       property_lat: '',
//       property_lng: '',
//       property_rooms: [
//         {
//           room_name: 'Luxury',
//           room_affiliateUrl: 'url',
//           room_priceEXCtax: 50000,
//           room_priceINCtax: 65000,
//           room_freeWifi: true,
//           room_freeCancellation: true,
//           room_breakfastIncluded: false,
//         },
//       ],
//     },
//     {
//       property_ota: 'Booking.com',
//       property_name: 'Winston Hotel',
//       property_imgUrl: '',
//       property_lat: '',
//       property_lng: '',
//       property_rooms: [
//         {
//           room_name: 'Master',
//           room_affiliateUrl: 'url',
//           room_priceEXCtax: 72000,
//           room_priceINCtax: 80000,
//           room_freeWifi: true,
//           room_freeCancellation: true,
//           room_breakfastIncluded: false,
//         },
//       ],
//     },
//   ],
// };

// v2
const myObj = {
  currency: 'PKR',
  properties: [
    {
      property_ota: 'Agoda',
      property_name: 'Sai Kaew Beach Resort',
      property_imgUrl: 'http://pix1.agoda.net/hotelimages/1/-1/c2e44c7f22a98b4f39959eb1099d53fc.jpg?s=312x&ca=16&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Luxury',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 50000,
      room_priceINCtax: 65000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Agoda',
      property_name: 'Marine Hotel',
      property_imgUrl: 'http://pix2.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x&ca=0&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 100000,
      room_priceINCtax: 120000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: true,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Pousada Vila do Mar',
      property_imgUrl: 'http://pix2.agoda.net/hotelimages/7/7/7_1209132256007455242.jpg?s=312x&ca=0&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Luxury',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 50000,
      room_priceINCtax: 65000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Malaga Alameda Centro Affiliated by Meliá',
      property_imgUrl: 'http://pix2.agoda.net/hotelimages/10/-1/38ffdf2941edb1853c1dede88933cacc.jpg?s=312x&ca=21&ce=0',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'NH Iquique Costa',
      property_imgUrl: 'http://pix2.agoda.net/hotelimages/13/0/5f8b6d43a6a287d37bfe1626ab22b0b1.jpg?s=312x&ca=7&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Thon PartnerHotel Maløy',
      property_imgUrl: 'http://pix3.agoda.net/hotelimages/14/14/14_16051513390042341825.jpg?s=312x&ca=6&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Sheraton Grand Hotel & Spa, Edinburgh',
      property_imgUrl: 'http://pix1.agoda.net/hotelimages/4875870/0/fe40289d684c4035d05dd00cd5bd0196.jpg?s=312x&ce=0',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Kew Green Hotel Wanchai Hong Kong',
      property_imgUrl: 'http://pix1.agoda.net/hotelimages/16/16/16_17072912020054755824.jpg?s=312x&ca=6&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Hotel Dann Carlton Medellin',
      property_imgUrl: 'http://pix5.agoda.net/hotelimages/17/17/17_16051513410042341853.jpg?s=312x&ca=6&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
    {
      property_ota: 'Booking.com',
      property_name: 'Winston Hotel',
      property_imgUrl: 'http://pix2.agoda.net/hotelimages/18/-1/91c5a3c5d5cc7189b0099fab9a2fbb64.jpg?s=312x&ca=0&ce=1',
      property_lat: '',
      property_lng: '',
      room_name: 'Master',
      room_affiliateUrl: 'url',
      room_priceEXCtax: 72000,
      room_priceINCtax: 80000,
      room_freeWifi: true,
      room_freeCancellation: true,
      room_breakfastIncluded: false,
    },
  ],
};

export const getSearchResults = async (req: express.Request, res: express.Response) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  res.status(200).json(myObj);
};

export const getAutoSuggestResults = (req: express.Request, res: express.Response) => {
  // const { q } = req.query;
  // const max = parseInt(req.query.max as string);

  const arr2 = [
    { name: 'Pearl Continental Lahore' },
    { name: 'Pearl Continental Rawalpindi' },
    { name: 'Pearl Continental Karachi' },
    { name: 'Pearl Continental Bhurban' },
    { name: 'Pearl Continental Hotel Malam Jabba' },
  ];

  // const arr = [];
  // for (let i = 0; i < max; i++) {
  //   arr.push({ id: i + 1, name: `${q}+str+${i + 1}` });
  // }
  res.status(200).json(arr2);
};
