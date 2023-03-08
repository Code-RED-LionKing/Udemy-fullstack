const { response } = require('express');
const express = require('express'); //서버참고해서 요청
const app = express();// 객체만들어 주세요
app.use(express.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.yujhzoq.mongodb.net/todoapp?retryWrites=true&w=majority',{ useUnifiedTopology: true },function(error, client){//DB접속 완료되면

    if(error) return console.log(error)
    db = client.db('todoapp');

    db.collection('post'). insertOne({이름 : 'John', 나이 : 20}, function(error, resurt){
        console.log('저장완료');

    });

    app.listen(8080, function() {

        console.log('listening on 8080')
    }); // 내부코드 실행시켜라
})

 //8080에 nodejs서버 띄워라


app.get('/', function(request, respond){
    respond.sendFile(__dirname + '/index.html')
});

app.get('/write' , function(request, respond){
    respond.sendFile(__dirname + '/write.html')
});

app.post('/add', function(request, respond){
    respond.send('전송완료');
    console.log(request.body.title);
    console.log(request.body.date); 
    //(request.body) body.뒤에는 구체적인 뭘꺼낼건지 적으면 됨.
});