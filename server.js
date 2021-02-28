// const express = require('express');
// const socketIO = require('socket.io');

// const PORT = process.env.PORT ||  3000;
// const INDEX = '/index.html';

// const server = express()
//   .set((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const io = socketIO(server);

// var temp;

// io.on('connection', function(client){
//   client.emit("welcome","hi"); //This is received by everyone
//   client.on("message", function(data){
//     temp = data;
//     client.broadcast.emit("broadcast",data);
//   });
// });




// TEST

const express = require('express')
const app = express()
const socket = require('socket.io')

const server = app.listen(3000, () => {
  console.log("server is running on port", server.address().port);
 });

app.use(express.static('css'))
app.use(express.static('img'))
app.use(express.static('js'))
app.use(express.static('fonts'))
app.use('/css' , express.static(__dirname + 'css'))
app.use('/img' , express.static(__dirname + 'img'))
app.use('/js' , express.static(__dirname + 'js'))
app.use('/fonts' , express.static(__dirname + 'fonts'))


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/contact', (req, res) => {
  //res.sendFile(`${__dirname}/views/contact.ejs`)
  res.render('contact')
})

app.get('/', (req, res) => {
  //res.sendFile(`${__dirname}/views/index.ejs`)
  res.render('index')
})


// app.listen(port, () => console.info(`Listening on ${port}`))


const io = socket(server)

var temp

io.on('connection', function(client){
  client.emit("welcome","hi"); //This is received by everyone
  client.on("message", function(data){
    temp = data
    console.log(data)
    client.broadcast.emit("broadcast",data)
  })
})