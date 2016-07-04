import mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient
mongoClient.connect('mongodb://localhost:27017/ex02db', (err, db) => {
    if (err) {
        console.error("Could not connect to database!")
    } else {
        console.log("Connected to database...")
        const users = db.collection('users')
        // db.collection('users').insertOne({ name: "hoppfull", password: "abc", age: 27 })
        // db.collection('users').updateOne({ name: 'hoppfull' }, { $set: { age: 28 } })
        // db.collection('users').deleteOne({ name: 'hoppfull' })
        // db.collection('users').find().toArray().then(ls => {
        //     console.log(ls)
        // })
        db.collection('users').find().stream().on('data', (item: any) => {
            console.log(item)
        })
    }
})

// https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html
// https://docs.mongodb.com/manual/reference/mongo-shell/
