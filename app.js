// 內建庫 bulit-in
const path = require('path');
// 第三方庫 third-party
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./config/env');
const cors = require('cors');

// 中間件 middlewares
const expressSession = require('./middlewares/session');

// 建立 app 實例
const app = express();
app.use(
    cors({
        origin: ['http://localhost'],
        credentials: true,
    })
);

// 樣版引擎設定 view engin setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// pre
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);

// router
app.use('/health', (req, res, next) => {
    res.status(200).send();
});

app.use('/long-task', (req, res, next) => {
    setTimeout(() => {
        res.status(200).send();
    }, 1000);
});

// 錯誤中間件
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
