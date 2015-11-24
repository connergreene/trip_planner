var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');
// var sass = require('node-sass-middleware');

var app = express();

app.use(morgan('dev'));

app.use("/", routes);

// Swig boilerplate
app.set('views', __dirname + '/views'); // where to find views
app.set('view engine', 'html'); // what file extension they have
app.engine('html', swig.renderFile); // how to render html
swig.setDefaults({cache: false}); // always re-render

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.methodOverride());
// app.use(
//   sass({
//     src: __dirname + '/assets', //where the sass files are 
//     dest: __dirname + '/public', //where css should go
//     debug: true
//   })
// );


app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});


app.use(function(err, req, res, next){
	res.status(err.status || 500);
	console.log({error:err});
	res.render(
		"error"
	);
});

app.listen(3000, function(err){
  console.log('Listening to port 3000');
});
