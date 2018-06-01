const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const event = require('./controllers/events');
const All = require('./controllers/Allevents');

const db = knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: "delux",
		password: '',
		database: 'thrive'
	//   connectionString : process.env.DATABASE_URL,
	//   ssl: true,
	}
  });

  db.select('*').from('event').then(data => {
	  console.log(data);
  })

const app = express();

//Using middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('it is working');
})

app.post('/signin', (req, res) => {signin.signinHandler(req, res, db, bcrypt)})

app.post('/register', (req, res) => {register.registerHandler(req, res, db, bcrypt)})

app.post('/event', (req, res) => {event.eventHandler(req, res, db)})

app.get('/allevents', (req, res) => {All.Allevents(req, res, db)})

// app.put('/image', (req, res) => {image.imageHandler(req, res, db)})

app.listen(3001, () => {
	console.log('App is running on port 3001');
})
