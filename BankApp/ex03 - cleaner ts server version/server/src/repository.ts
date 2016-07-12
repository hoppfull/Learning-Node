import mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;

const accounts = (db: mongodb.Db) => db.collection('accounts')

type dbCallback = (err: mongodb.MongoError, account: IAccount) => void
type retrieveAccountSig = (db: mongodb.Db) => (query: {}, f: dbCallback) => void
export const retrieveAccount: retrieveAccountSig = db => (query, f) =>
    accounts(db).find(query).limit(1).next(f)

export const createAccount = (db: mongodb.Db, account: IAccount) => {
    accounts(db).insert(account)
}

export const connect = (connection: string): Promise<mongodb.Db> =>
    new Promise((resolve, reject) => {
        mongoClient.connect(connection, (err, db) => !err
            ? resolve(db)
            : reject(err.message))
    })

