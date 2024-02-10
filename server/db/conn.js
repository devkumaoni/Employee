const mongoose = require('mongoose');
 
const DB = process.env.DATABASE;

console.log(DB);

mongoose.connect(DB, {
 
}).then(() => {
    console.log('success');
}).catch((err) => console.log('not success',err));