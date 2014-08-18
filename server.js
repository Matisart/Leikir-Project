// Frameworks
var express = require('express')
  , app     = express()
  , server  = require('http').createServer(app)
  , io      = require('socket.io').listen(server)
  , jade    = require('jade')
  , stylus  = require('stylus')
  , nib     = require('nib');


// Declaration of async events
io.on('connection', function(socket){
	console.log('A user connected !');
  	socket.on('event', function(data){});
  	socket.on('disconnect', function(){
  		console.log('A user disconnected !')
  	});
  	socket.on('chat message', function(msg){
    	console.log('message: ' + msg);
  	});
});

// Setting sever connection on port 8080 for testing, change to 80 on prod
server.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

// Custom function to use nib in conjuction with stylus
function compile(str, path) {
	return stylus(str)
		.set('filename', path)
		.use(nib())
		.import('nib');
}

app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');

app.use(stylus.middleware(
	{ src     : __dirname + '/public'
	, compile : compile }
));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// res.setHeader('Content-Type', 'text/plain');
    // res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
    
    res.render('index.jade', {title : 'Accueil'});
    
    // res.render('test.jade', {title : 'Accueil'});
})
.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page introuvable !');
});