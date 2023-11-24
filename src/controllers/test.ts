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
      property_name: 'Pearl Continental',
      property_imgUrl: '',
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
      property_name: 'Pearl Continental',
      property_imgUrl: '',
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
      property_name: 'Serena Hotel',
      property_imgUrl: '',
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
      property_name: 'Winston Hotel',
      property_imgUrl: '',
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
      property_imgUrl: '',
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
      property_imgUrl: '',
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
      property_imgUrl: '',
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
      property_imgUrl: '',
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
      property_imgUrl: '',
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
      property_imgUrl: '',
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

export const getSearchResults = (req: express.Request, res: express.Response) => {
  res.status(200).json(myObj);
};

export const getAutoSuggestResults = (req: express.Request, res: express.Response) => {
  const { q } = req.query;
  const max = parseInt(req.query.max as string);

  const arr = [];
  for (let i = 0; i < max; i++) {
    arr.push({ id: i + 1, name: `${q}+str+${i + 1}` });
  }
  res.status(200).json(arr);
};
