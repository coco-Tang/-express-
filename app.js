var express = require("express");
var app = express();

app.use(require("body-parser").urlencoded({ extended: false }));


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

    res.send(result);
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

app.listen(9000, function () {
    console.log("http://localhost:9000");
})