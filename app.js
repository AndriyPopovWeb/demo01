var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

var  express  =  require('express');
var  express_handlebars   =  require('express-handlebars');
var  express_handlebars_sections  =  require('express-handlebars-sections'); 
var  app  =  express(); 
let  hbs  =  express_handlebars.create({
    defaultLayout: 'layout',
         // properties used by express-handlebars configuration ... 
    extname: '.hbs'
});

express_handlebars_sections(hbs);   
// CONFIGURE 'express_handlebars_sections' 
 
app.engine('hbs', hbs.engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;