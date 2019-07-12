const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://ecommerce:rishabh123456@cluster0-y45l2.mongodb.net/test?retryWrites=true&w=majority';
const mongoConnect = (callback) => {
    MongoClient.connect(
        url,
        { useNewUrlParser: true}
    )
    .then(client => {
        console.log('Connection!')
    })
    .catch(err => {
        console.log(err)
    });
}

module.exports = mongoConnect;