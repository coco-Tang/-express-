var express = require("express");
var app = express();
var cors = require("cors");
var fs = require("fs");
var path = require("path");
var session = require('express-session');
var querystring = require('querystring');

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'login'
});

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
// //   if (error) throw error;
// //   console.log('The solution is: ', results[0].solution);
// console.log('error',error,'results',results,'fields',fields)
// });

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
    // origin: "http://127.0.0.1:5500"
    origin: "*"
    // origin: "192.168.1.46:10001"
}))

app.use(express.static('public'));//设置public文件夹下的静态资源，浏览器http://localhost:10001/1.wav即可访问

app.get("/statistics/statistic.do", function(req,res) {
    let params = req.query;
    // console.log(params)
    // console.log(typeof params)
    // console.log(querystring.parse(params))
    const result = [
        {
            range: 0,
            data: {
                callin: {
                    totalCount: 44423,
                    totalLen: 44432
                },
                preTel: {
                    totalCount: 44444,
                    totalLen: 44459
                },
                transfer: {
                    totalCount: 44413,
                    totalLen: 44412
                }
            }
        },
        {
            range: 1,
            data: {
                callin: {
                    totalCount: 23,
                    totalLen: 32
                },
                preTel: {
                    totalCount: 44,
                    totalLen: 59
                },
                transfer: {
                    totalCount: 13,
                    totalLen: 12
                }
            }
        },
        {
            range: 7,
            data: {
                callin: {
                    totalCount: 435,
                    totalLen: 332
                },
                preTel: {
                    totalCount: 414,
                    totalLen: 259
                },
                transfer: {
                    totalCount: 613,
                    totalLen: 512
                }
            }
        },
        {
            range: 30,
            data: {
                callin: {
                    totalCount: 2435,
                    totalLen: 2332
                },
                preTel: {
                    totalCount: 2414,
                    totalLen: 2259
                },
                transfer: {
                    totalCount: 2613,
                    totalLen: 2512
                }
            }
        }
    ]

    res.send({
        data: result.filter(item => { 
            return item.range == params.range }),
        code: 200,
        msg: "success"
    })
})
app.get('/api/bigtabledata',function(req,res) {
    let result = [];
    for(let i = 0; i < 100; i++) {
        result.push({
            name: `susan${i}`,
            id: i
        })
    }
    res.send({
        data: result,
        code: 200,
        msg: "success"
    })
})

function random(arr=[]) {
    let len = arr.length;
    let index = Math.floor(Math.random()*len);
    return arr[index];
}
app.get('/api/order/list',function(req,res) {
    let result = [];
    let productArr = ["西瓜","香蕉","奇异果","博洋蜜瓜","樱桃","杨梅"];
    let priceArr = [3.00,4.88,2.98,15.8,12.9];
    let numberArr = [10,20,25,5,3];
    let deliveryArr = ["自提","外卖"];
    
    let statusArr = [1,2,3];
    for(let i = 0; i < 10; i++) {
        result.push({
            orderId: i+1,
            product: `${random(productArr)}`,
            price: `${random(priceArr)}`,
            number: `${random(numberArr)}`,
            status: `${random(statusArr)}`,
            delivery: `${random(deliveryArr)}`
        })
    }
    res.send({
        data: result,
        code: 200,
        msg: "success"
    })
})

app.get('/api/class/students/:classid', function(req,res){
    const id = req.params.classid;
    var data = [
        {
            id: 1,
            name: '吴彤'
        },
        {
            id: 2,
            name: '陈丹丹'
        },
        {
            id: 3,
            name: '李玉龙'
        },
        {
            id: 4,
            name: '王欣怡'
        },
        {
            id: 5,
            name: '朱艳'
        },
        {
            id: 6,
            name: '杨雪华'
        },
        {
            id: 7,
            name: '思思'
        },
        {
            id: 8,
            name: '刘磊'
        },
        {
            id: 9,
            name: '何玉娟'
        },
        {
            id: 10,
            name: '王思聪'
        },
        {
            id: 11,
            name: '二哈'
        }
    ];
    var result = data.splice((id - 1) * id, Math.ceil(Math.random() * 10));
    res.send({
        data: result,
        code: 200,
        msg: 'success' 
    })
    
})

app.get('/api/checkboxgroup', function(req,res){
    var result = {
        'data': [
            {
                objectId: '20180101_1',
                files: [
                    'lei.wav',
                    '1.wav'
                ]
            },
            {
                objectId: '20180201_1',
                files: [
                    '战斗声纹.wav',
                    'lei.wav',
                    '1.wav'
                ]
            },
            {
                objectId: '20180301_1',
                files: [
                    '1.wav'
                ]
            }
        ]
    };
    res.send(result);
})

app.get('/api/bigtabledata',function(req,res){
    let scrollTableData = [];
    for (let i = 0; i < 100; i++) {
      scrollTableData.push({
        name: `q${i}`,
        age: i,
        address: i,
        status: i,
        list: i,
        test1: i,
        test2: i,
        test3: i,
        test4: i
      })
    }
    res.send(scrollTableData);
})

/* promise(async/await) */
app.get('/api/promise/:id',function(req,res){
    let id = req.params.id;
    console.log('req.params',req.params);
    // console.log('id',id);
    let result = {
        data : id
    };
    // res.send(result);
    setTimeout(() => {
        res.send(result)
    },10000*id)
})

app.get('/api/promiseA',function(req,res){
    let result = {
        'data' : 2
    };
    setTimeout(() => {
        res.send(result)
    },10000)
})

app.get('/api/promiseB',function(req,res){
    let result = {
        'data' : 3
    };
    setTimeout(() => {
        res.send(result)
    },1000000)
})

app.get('/api/pagination/:cur',function(req,res) {
    // console.log('req.body',req.body);//用于post请求
    // console.log('req.query',req.query.cur);
    // console.log('req.params',req.params.cur);
    let cur_page = 1;
    if (!req.params.cur) {
      return;
    } else {
        cur_page = parseInt(req.params.cur);
    }
    // console.log('cur_page',cur_page);
    const data = [
        {"a": 1, "b": 2, "c": "2018_06_20", _checked: false, id: 1},
        {"a": 10, "b": 12, "c": "2018_06_21", _checked: false, id: 2},
        {"a": 14, "b": 22, "c": "2018_06_22", _checked: false, id: 3},
        {"a": 11, "b": 62, "c": "2018_06_23", _checked: false, id: 4},
        {"a": 111, "b": 24, "c": "2018_06_24", _checked: false, id: 5},
        {"a": 17, "b": 29, "c": "2018_06_25", _checked: false, id: 6},
        {"a": 13, "b": 72, "c": "2018_06_26", _checked: false, id: 7},
        {"a": 14, "b": 23, "c": "2018_06_27", _checked: false, id: 8},
        {"a": 1, "b": 2, "c": "2018_06_10", _checked: false, id: 9},
        {"a": 10, "b": 12, "c": "2018_06_11", _checked: false, id: 10},

        {"a": 14, "b": 22, "c": "2018_06_12", _checked: false, id: 11},
        {"a": 11, "b": 62, "c": "2018_06_13", _checked: false, id: 12},
        {"a": 111, "b": 24, "c": "2018_06_14", _checked: false, id: 13},
        {"a": 17, "b": 29, "c": "2018_06_15", _checked: false, id: 14},
        {"a": 13, "b": 72, "c": "2018_06_16", _checked: false, id: 15},
        {"a": 14, "b": 23, "c": "2018_06_17", _checked: false, id: 16},
        {"a": 17, "b": 29, "c": "2018_06_25", _checked: false, id: 17},
        {"a": 13, "b": 72, "c": "2018_06_26", _checked: false, id: 18},
        {"a": 14, "b": 23, "c": "2018_06_27", _checked: false, id: 19},
        {"a": 1, "b": 2, "c": "2018_06_10", _checked: false, id: 20},
        {"a": 10, "b": 12, "c": "2018_06_11", _checked: false, id: 21},
        {"a": 14, "b": 22, "c": "2018_06_12", _checked: false, id: 22},
        {"a": 11, "b": 62, "c": "2018_06_13", _checked: false, id: 23},
        {"a": 111, "b": 24, "c": "2018_06_14", _checked: false, id: 24},
        {"a": 17, "b": 29, "c": "2018_06_15", _checked: false, id: 25},
    ];
    let pagination_data = data.splice((cur_page-1)*10,10);
    // console.log('pagination_data',pagination_data);

    var result = {
        "data": pagination_data,
        "count": data.length,
        "code": 200,
        "message": true
    }
    res.send(result);   
})

app.get('/api/keyword', function(req,res) {
    var result = {
        'data': [
            {KeyWords: 'hh',Lang: 'hanyu',Threshold: '70',Notes: ''},
            {KeyWords: 'aa',Lang: 'hanyu',Threshold: '70',Notes: ''},
            {KeyWords: 'bb',Lang: 'hanyu',Threshold: '70',Notes: ''}
        ]
    };
    res.send(result);
})

app.put('/api/user/:id', function(req, res) {
    let params = req.body;
    console.log('update user params', params);
    let $sql = `update user set sex = ${params.sex} where id = ${params.id}`;
    res.send("请求成功了")
})

// 用户登录
app.post('/login', function(req, res){
    console.log('req, res',req, res)
    if(req.body.username == 'admin' && req.body.pwd == 'admin123'){
        req.session.userName = req.body.username; // 登录成功，设置 session
        res.json({ret_code : 1, ret_msg : '登录成功'});
    }
    else{
        res.json({ret_code : 0, ret_msg : '账号或密码错误'});// 若登录失败，重定向到登录页面
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

app.get('/api/getfloat32array',function(req,res){
    
})

app.post('/api/play',function(req,res){
    /**服务端接收post请求参数的流程
         * （1）给req请求注册接收数据data事件（该方法会执行多次，需要我们手动累加二进制数据）
         *      * 如果表单数据量越多，则发送的次数越多，如果比较少，可能一次就发过来了
         *      * 所以接收表单数据的时候，需要通过监听 req 对象的 data 事件来取数据
         *      * 也就是说，每当收到一段表单提交过来的数据，req 的 data 事件就会被触发一次，同时通过回调函数可以拿到该 段 的数据
         * （2）给req请求注册完成接收数据end事件（所有数据接收完成会执行一次该方法）
         */
        //创建空字符叠加数据片段
        var data = '';

        //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
        req.on('data', function (chunk) {
            // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
            data += chunk;
        });

        // 3.当接收表单提交的数据完毕之后，就可以进一步处理了
        //注册end事件，所有数据接收完成会执行一次该方法
        req.on('end', function () {

            //（1）.对url进行解码（url会对中文进行编码）
            console.log('data',data);
            data = decodeURI(data);

            /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
            var dataObject = querystring.parse(data);
            console.log('dataObject',dataObject);
        });
    // console.log('req',req.body);
    fs.readFile(path.join(__dirname,"20180712091958.jpg"),function(err,data){
        res.send(data);
    })
})

app.get('/api/mediaurl',function(req,res){
    fs.readFile(path.join(__dirname,"qrcode2.png"),function(err,data){
       res.send(data)
    })
})

app.get('/file/:fileName', function(req, res, next) {
    // 实现文件下载 
    var fileName = req.params.fileName;
    // var fileName = "public/blob";
    var filePath = path.join(__dirname, `public/${fileName}`);
    var stats = fs.statSync(filePath); 
    if(stats.isFile()){
      res.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename='+fileName,
        'Content-Length': stats.size
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.end(404);
    }
  });

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

app.use(express.static('public'));
app.get('/public/images/*', function(req,res){
    res.sendFile(__dirname+ "/" + req.url);
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
                "listId": 11,
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
                "listId": 12,
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
                "listId": 13,
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
                "listId": 14,
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
                "listId": 15,
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
                "listId": 16,
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
                "listId": 17,
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
                "listId": 18,
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
                "listId": 19,
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
                "listId": 20,
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
                "listId": 21,
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
                "listId": 22,
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
                "record": "",
                "SamplePaths": [
                    "/admin/voices/alaw/2018418-2/lyc16.wav",
                    "/admin/voices/alaw/2018418-2/lyc12.wav",
                    "/admin/voices/alaw/2018418-2/lyc07.wav",
                    "/admin/voices/alaw/2018418-2/lyc18.wav",
                    "/admin/voices/alaw/2018418-2/lyc19.wav",
                    "/admin/voices/alaw/2018418-2/lyc27.wav",
                    "/admin/voices/alaw/2018418-2/lyc36.wav",
                    "/admin/voices/alaw/2018418-2/lyc15.wav",
                    "/admin/voices/alaw/2018418-2/lyc20.wav",
                    "/admin/voices/alaw/2018418-2/lyc26.wav",
                    "/admin/voices/alaw/2018418-2/lyc08.wav",
                    "/admin/voices/alaw/2018418-2/lyc23.wav",
                    "/admin/voices/alaw/2018418-2/lry33.wav",
                    "/admin/voices/alaw/2018418-2/lry13.wav",
                    "/admin/voices/alaw/2018418-2/lry10.wav",
                    "/admin/voices/alaw/2018418-2/lry16.wav",
                    "/admin/voices/alaw/2018418-2/wn01.wav ",
                    "/admin/voices/alaw/2018418-2/wn03.wav ",
                    "/admin/voices/alaw/2018418-2/zhm02.wav",
                    "/admin/voices/alaw/2018418-2/zhm01.wav"
                  ],
                "TrainPaths": [
                "/admin/voices/alaw/2018418-2/lyc16.wav",
                "/admin/voices/alaw/2018418-2/lyc12.wav",
                "/admin/voices/alaw/2018418-2/lyc07.wav"
                ]
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