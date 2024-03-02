import express from "express";
import connectToMongoose from './config.js'
import user from "./model.js";
const app = express()
const port = 8000

await connectToMongoose()

app.use((req, res, next) => {
  // Set headers to allow requests from any origin
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.json())
app.get('/api',(req, res) => {
 
 
  res.send("data")
})


app.get('/', async (req, res) => {
  const data = await user.find()
  res.send(data)
})

app.get('/user/:uid', async (req, res) => {
  const data = await user.findOne({ uid: req.params.uid })
  res.send(data)
})


app.post('/create', async (req, res) => {
  console.log(req.body)
  const data = new user(req.body)
  const result = await data.save()
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})