var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");
var path = require("path");
var session = require('express-session');

// 使用 session 中间件
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));

app.use(require("body-parser").urlencoded({ extended: false }));
app.use(cors({
    credentials: true,
    origin: "http://127.0.0.1:5500"
}))

// 用户登录
app.post('api/login', function(req, res){
    if(req.body.username == 'admin' && req.body.pwd == 'admin123'){
        req.session.userName = req.body.username; // 登录成功，设置 session
        res.redirect('/');
    }
    else{
        res.json({ret_code : 1, ret_msg : '账号或密码错误'});// 若登录失败，重定向到登录页面
    }
});

app.get('/api/mychart/:id',function(req,res){
    var id = req.query;
    console.log(id);
    var result = {
        'data': [1,5,10,6,id]
    };
    // switch (id) {
    //     case 0 : 
    //     result = {
    //         'data': [1,5,10,6]
    //     };
    //     break;
    //     case 1 : 
    //     result = {
    //         'data': [9,10,87,289]
    //     };
    //     break;
    //     case 2 : 
    //     result = {
    //         'data': [90,38,178,78]
    //     };
    //     break;
    // }
    // res.send(result);
})

app.get('/api/play',function(req,res){
    fs.readFile(path.join(__dirname,"陈硕琦-G-1.wav"),function(err,data){
        res.send(data);
    })
})
app.get('/api/validator/taskname',function(req,res){
    var result = {
        'data': ["老大的语音","老二的语音","老三的语音"]
    }
    res.send(result);
})
app.get('/api/loading',function(req,res){
    var result = {
        success: '成功'
    }
    res.send(result)
})
app.get('/api/voicetest', function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('http://192.168.1.56:8080/voiceprint_ide/localvoice/20180411094806/%E6%88%98%E6%96%97%E5%A3%B0%E7%BA%B9.wav')
})

app.get('/api/getnavlsit', function(req, res) {
    // res.setHeader('Access-Control-Allow-Origin', '192.168.1.69');
    var result = {
        'data': [
            'yi','er','san','si'
        ]
    }
    res.send(result);
})

app.get('/api/getpaginatorlist', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var result = {
        "result": [
            {
                "listId": 1,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "汉语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "已推送",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 2,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "汉语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "未推送",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 3,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "已推送",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 4,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "未转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 5,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 6,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 7,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 8,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 9,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "女",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 10,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 1,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "lang": "英语",
                "callNo": "12345678911",
                "calledNo": "17822245621",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 4,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "未转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 5,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 2,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 3,
                "fileName": "奶昔",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 4,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "未转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 5,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 6,
                "fileName": "王五",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 7,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 8,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 9,
                "fileName": "张三",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "女",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
            {
                "listId": 10,
                "fileName": "李四",
                "selectedVoice": "花婆婆",
                "transferStatus": "已转写",
                "semanticsStaus": "未处理",
                "gender": "男",
                "callNo": "12345678911",
                "pushStatus": "17822245621",
                "auditionStatus": "17822245621",
            },
        ]
    }

    res.send(result);
})


app.get("/api/getaudiopath", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({
        "result": "http://192.168.1.65:8080/api/pcm/auto/20180126/f01秦燕_f-秦燕-17241734-16k-33.wav"
    })
})

app.get('/api/geteletestlist', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    var result = {
        "result": [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'aa',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
    setTimeout(function(){
        res.send(result);
        
    },1000)
})

app.get('/api/getvoicelist', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var result = {
        "result": [
            {
                "voiceNo": "123",
                "voiceName": "张三",
                "gender": "男",
                "lang": "汉语",
                "type": "诈骗",
                "trainStatus": "训练失败",
                "threshold": "",
                "onlineStatus": "上线",
                "createTime": "2018-5-5",
                "record": ""
            },
            {
                "voiceNo": "13",
                "voiceName": "张三",
                "gender": "男",
                "lang": "汉语",
                "type": "诈骗",
                "trainStatus": "训练成功",
                "threshold": "",
                "onlineStatus": "下线",
                "createTime": "2018-5-5",
                "record": ""
            },
            {
                "voiceNo": "23",
                "voiceName": "张三",
                "gender": "男",
                "lang": "汉语",
                "type": "诈骗",
                "trainStatus": "未训练",
                "threshold": "",
                "onlineStatus": "上线",
                "createTime": "2018-5-5",
                "record": ""
            }

        ]
    }

    res.send(result);
})


app.get('/api/getfilelist', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var result = {
        "result": [
            {"srcpath":"/avvfffk.wav"},
            {"srcpath":"/savvfffk.wav"},
            {"srcpath":"/cavvfffk.wav"},
            {"srcpath":"/aavvfffk.wav"},
        ]
    }

    res.send(result);
})

app.get('/api/tablelist', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var result = {
        "result": [
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60},
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60},
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60},
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60},
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60},
            {"name": "aaa","age": 18, "gender": "male", "height": 180, "weight": 55},
            {"name": "bbb","age": 15, "gender": "female", "height": 170, "weight": 60}
        ]
        
    }
    res.send(result);
})

app.listen(10001, function () {
    console.log("http://localhost:10001");
})