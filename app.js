// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

const mongoose = require('mongoose');
const OrderModel = require('./models/orderModel');
require('./models/productModel');

(async () => {
    //Database connection
    let database;
    // database = await MongoClient.connect('mongodb://127.0.0.1:27017').then((client) => {
        
    //     database = client.db('shop');
    //     if(!database) {
    //         console.log('Database not connected');
    //     } else {
    //         console.log('Database Connected');
    //     } return database;
    //   });

    mongoose.connect('mongodb://127.0.0.1:27017/shop').then(() => {
        console.log('Database connected');
    }).catch (() => {
        console.log('Database not connected');
    })



// const orders =await database.collection('orders').aggregate([
//     {
//     $lookup: {
//         from: 'products',
//         localField : 'product_ids',
//         foreignField : '_id',
//         as : 'orderProducts'
//             }
//     }
// ]).toArray()
//     console.log(JSON.stringify(orders));

   const orders = await OrderModel.find({}).populate(['product_ids', 'customer_id'])
   console.log(JSON.stringify(orders));

})();