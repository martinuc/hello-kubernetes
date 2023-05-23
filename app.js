const path = require('path');
const createError = require('http-errors');
const express = require('express');
const app = express();

// 靜態資源
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/health', (req, res, next) => {
    res.status(200).json({ status: 200, message: 'health' });
});

app.use('/long-task', (req, res, next) => {
    setTimeout(() => {
        res.status(200).send({ status: 200, message: 'long-task' });
    }, 1);
});

// 錯誤處理
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
