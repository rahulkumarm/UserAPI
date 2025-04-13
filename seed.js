const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const users = [
  { name: 'Alice Johnson', email: 'alice@example.com', age: 25 },
  { name: 'Bob Smith', email: 'bob@example.com', age: 19 },
  { name: 'Charlie Brown', email: 'charlie@example.com', age: 30 },
];

mongoose
  .connect(process.env.MONGODB_URI) // simplified!
  .then(async () => {
    await User.deleteMany(); // optional cleanup
    const insertedUsers = await User.insertMany(users);
    console.log('Seeded users:');
    insertedUsers.forEach((u) => {
      console.log(`- ${u.name} (id: ${u._id})`);
    });
    process.exit();
  })
  .catch((err) => {
    console.error('Error seeding users:', err);
    process.exit(1);
  });
