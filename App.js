let express = require('express')
let App = express()
let cors = require('cors')
let Mongo = require('mongodb')
let bodyParser = require('body-parser')
let MongoClint = Mongo.MongoClient
let MongoUrl = "mongodb+srv://YamanayyaG:Yama1234@cluster0.xaxusar.mongodb.net/FlipkartApi?retryWrites=true&w=majority"
let Port = process.env.PORT || 5000
let database;


//mid layer
App.use(cors())
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))



App.get('/', (req, res) => {
    res.send('FLIP KART NODE API')
})

App.get('/Electronics', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Electronic').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/Furniture', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Furniture').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/Kitchen', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Kitchen').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/Products', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Products').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/Test', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Test').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/Sports', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('Sports').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/grocery', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('grocery').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/WeddingGifts', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('WeddingGifts').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.get('/dress', (req, res) => {
    let query ={}
    let id=Number(req.query.id)
    if(id){
     query={product_id:id}
    }
    database.collection('dress').find(query).toArray((err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
App.post('/Placeorder',(req,res)=>{
    database.collection('orders').insertOne(req.body ,(err,data)=>{
     if (err) throw err;
     res.send('Order placed success')
    })
 })
 App.get('/viewOrder',(req,res) => {
    let email = req.query.email;
    let query = {};
    if(email){
        query={email:email}
    }else{
        query={}
    }
    database.collection('orders').find(query).toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})
MongoClint.connect(MongoUrl, { useNewUrlParser: true }, (err, data) => {
    if (err) console.log('error while connecting db')
    database = data.db('FlipkartApi')
    App.listen(Port, () => {
        console.log(`Server started on ${Port}`)
    })
})
