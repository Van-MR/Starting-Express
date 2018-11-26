var express = require('express')

var path = require('path')

var bodyParser = require('body-parser')

var mongoose = require('mongoose')

var logger = require('morgan')

var timeout = require('connect-timeout')

const favicon = require('serve-favicon')

const hero = require('./router/hero')

//connect database
var db = mongoose.connect('mongodb://127.0.0.1:27017/Mong');

var app = express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//use middleware
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

app.use(timeout('5s'))
app.use('/api',hero)

//catch 404 and forward to error handler
//捕获404并发送给错误处理程序
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
//错误处理
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    //设置局部变量，只提供开发模式下的错误信息
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    //渲染错误页面
    res.status(err.status || 500);
    res.render('error');
});

//listen port
app.listen(9000,function() {
  console.log('app listening on port 9000.')
})
