const express = require('express');
const app = express();
const mongoose = require('mongoose');
const noteRouter = require('./routers/noteRouter');
const {renderFile} = require('./controllers/viewController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', './public/views')


mongoose
	.connect('mongodb://localhost:27017/note-app')
	.then(() => console.log('connected to db'))
	.catch(e => console.log(e));

app.use((req, res, next)=> {
  console.log(req.body)
  next()
})
app.use('/notes', noteRouter)
app.use(renderFile);


app.listen(5000, () => console.log('server listening'));
