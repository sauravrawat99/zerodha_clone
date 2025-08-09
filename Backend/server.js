const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Routes
app.use('/api/holdings', require('./routes/holdingRoutes'));
app.use('/api/positions', require('./routes/positionRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));







// const mongoose = require('mongoose');
// require('dotenv').config();

// // Models import – yahan se `../` hata do
// const Holding = require('./models/holdingSchema');
// const Position = require('./models/positionSchema');
// const Order = require('./models/orderSchema');

// // Dummy data - Holdings
//  const holdings = [
//   { name: "Reliance Industries", qty: 10, price: 2500, avg: 2450, net: 500, day: 50 },
//   { name: "Tata Motors", qty: 20, price: 800, avg: 780, net: 400, day: 20 },
//   { name: "Infosys", qty: 15, price: 1500, avg: 1480, net: 300, day: 40 },
//   { name: "HDFC Bank", qty: 25, price: 1600, avg: 1580, net: 500, day: 20 }
// ];

// // Dummy data - Positions
// // Dummy data - Positions (schema ke required fields ke saath)
// const positions = [
//   {
//     name: "Infosys",
//     qty: 5,
//     price: 1500,
//     avg: 1480,
//     net: 100,
//     day: 50,
//     product: "CNC"
//   },
//   {
//     name: "HDFC Bank",
//     qty: 15,
//     price: 1600,
//     avg: 1580,
//     net: -300,
//     day: -20,
//     product: "MIS"
//   }
// ];

// // Dummy data - Orders
// const orders = [
//   { name: "ICICI Bank", qty: 10, price: 950, mode: "BUY" },
//   { name: "TCS", qty: 8, price: 3500, mode: "SELL" }
// ];
// ``


// // MongoDB connect & insert
// mongoose.connect(process.env.MONGO_URI, {
//   dbName: "zerodha_clone",
// })
//   .then(async () => {
//     console.log('✅ MongoDB Connected');

//     await Holding.deleteMany({});
//     await Position.deleteMany({});
//     await Order.deleteMany({});

//     await Holding.insertMany(holdings);
//     await Position.insertMany(positions);
//     await Order.insertMany(orders);

//     console.log('🎯 Dummy data inserted successfully!');
//     process.exit();
//   })
//   .catch(err => {
//     console.error('❌ Error:', err);
//     process.exit(1);
//   });
