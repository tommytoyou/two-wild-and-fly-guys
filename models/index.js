const mongoose = require('mongoose');


// options {object}
const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
// url,configOptions
// thius is to connect to mongo
mongoose.connect('mongodb://localhost/gaSpaceX', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

constdb = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB at ${db.host: ${db.port');
});

db.on('error', (err) => {
    console.log('====> ERROR');
    console.log(err);
});

constCapsule = require('./capsule');


module.exports = {
    Capsule: require('./capsule')
}