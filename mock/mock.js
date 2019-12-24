const express = require('express');

const app = express();

app.get('/api/course/list', (req, res) => {
    //支持跨域
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Content-Type',"application/json;charset=utf-8");
    res.json({
        code: 0,
        list:[
            {name:'111',id:1},
            {name:'222',id:2},
            {name:'333',id:3},
        ]
    })
})

app.listen(9090,()=> {
    console.info('mock启动')
})