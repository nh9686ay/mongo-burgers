const mongoose = require('mongoose')
const db = mongoose.connection

const hotelSeed = require('./models/seed.js')
const Hotel = require('./models/hotel.js')

const mangoURI = "mongodb+srv://nh9686ay:Hitman95@cluster0.0pdjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mangoURI)

// **CREATING HOTELS

// Hotel.create(hotelSeed, (err, data) => {
//     console.log(data)
//     db.close()
// })

// ** ADDING MY OWN HOTEL

// let myHotel = {
//     "name": "Paradise Hotel",
//     "location": "Charlotte",
//     "rating": 5,
//     "vacancies": true,
//     "rooms": [{
//             "roomNumber": 102,
//             "size": "Queen Double",
//             "price": 55,
//             "booked": true
//         },
//         {
//             "roomNumber": 202,
//             "size": "King Suite",
//             "price": 68,
//             "booked": false
//         },
//         {
//             "roomNumber": 404,
//             "size": "Queen Double",
//             "booked": false
//         },
//         {
//             "roomNumber": 605,
//             "size": "King Suite",
//             "price": 68,
//             "booked": true
//         },
//         {
//             "roomNumber": 777,
//             "size": "Penthouse",
//             "price": 888,
//             "booked": false
//         }
//     ],
//     "tags": [
//         "pink champagne",
//         "wine",
//         "lovely",
//         "can't leave"
//     ]
// }

// ** CREATING MY HOTEL

// Hotel.create(myHotel, (err, data) => {
//     console.log(data)
// })

// ** COUNTING HOTELS(OUTPUT: 13)

// Hotel.count({}, (err, data) => {
//     if (err) console.log(err.message);
//     console.log(`There are ${data} hotels in this database`);
// });

// **FINDING ALL HOTELS

// Hotel.find({}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **RETURNING JUST NAMES

// Hotel.find({}, {name: 1}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **FINDING MY HOTEL

// Hotel.find({name: "Paradise Hotel"}, (err, data) => {
//     console.log(data)
//     db.close()
// })

//**HOTELS WITH VACANCIES AND EXCLUDED RATINGS

// Hotel.find({vacancies: true}, {rating: 0}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **DELETING HOTELICOPER

// Hotel.deleteOne({name: "Hotelicopter"}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **DELETING HiILBERT'S HOTEL

// Hotel.deleteOne({name: "Hilbert's Hotel"}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **DELETING HOTEL IN COLORADO ROCKIES

// Hotel.deleteOne({location: "Colorado Rockies"}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **SETTING THE GREAT NORTHERN HOTEL'S RATING TO 5

// Hotel.findOneAndUpdate({name: "The Great Northern"}, {$set: {rating: 5}}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **SETTING MOTELS BAMBI'S VACANCIES TO FALSE

// Hotel.findOneAndUpdate({name: "Motel Bambi"}, {$set: {vacancies: false}}, (err, data) => {
//     console.log(data)
//     db.close()
// })

// **SETTING WHITE BAY HOTEL'S RATING TO 2

// Hotel.findOneAndUpdate({location: "White Bay, Oregon"}, {$set: {rating: 2}}, (err, data) => {
//     console.log(data)
//     db.close()
// })