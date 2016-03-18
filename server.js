var express = require('express'),
    app = express(),
    router = express.Router(),
    port = process.env.PORT || 3000;


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});
app.use(express.static('build'));
app.use(express.static('static'));
var home = require('./routes/home');
app.use('/', home);


// scheduleJob.setRule();

app.listen(port,'127.0.0.1',function(){
    console.log('go http://127.0.0.1:3000/');
});