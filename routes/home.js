var express = require('express'),
    fs = require('fs'),
    router = express.Router();

var app = express();

router.use(function(req, res, next) {
    // 輸出記錄訊息至終端機
    console.log(req.method, req.url);
    // 繼續路由處理
    next();
});

router.get('/*',function(req, res){
    fs.createReadStream('./app/index.html').pipe(res);
});

module.exports = router;
