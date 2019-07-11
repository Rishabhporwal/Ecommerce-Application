const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://rishabh:9302111070@cluster0-y45l2.mongodb.net/test?retryWrites=true&w=majority'
    )
    .then(client => {
        console.log('Connection!')
    })
    .catch(err => {
        console.log(err)
    });
}