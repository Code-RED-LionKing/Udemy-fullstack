const { response } = require('express');
const express = require('express'); //서버참고해서 요청
const app = express();// 객체만들어 주세요
app.use(express.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs'); //ejs 설치후 입력.

var db;
MongoClient.connect('mongodb+srv://admin:q1w2e3@cluster0.yujhzoq.mongodb.net/node_js?retryWrites=true&w=majority',{ useUnifiedTopology: true },function(error, client){//DB접속 완료되면

    if(error) return console.log(error)
    db = client.db('node_js');
    console.log('연결완료');

    db.collection('post'). insertOne({이름 : 'John', 나이 : 20}, function(error, result){
        console.log('저장완료');
    });

    app.listen(8080, function() {

        console.log('listening on 8080')
    }); // 내부코드 실행시켜라

   
});

 //8080에 nodejs서버 띄워라


app.get('/', function(request, respond){
    respond.sendFile(__dirname + '/index.html')
});

app.get('/write' , function(request, respond){
    respond.sendFile(__dirname + '/write.html')
});

app.post('/add', function(request, respond){ //add로 POST요청을 하면
    
    db.collection('counter').findOne({name : '게시물갯수'},function(error,result){ //DB내의 게시물 갯수 항목을 찾아서
        console.log(result.totalPost);
        var 총게시물갯수 = result.totalPost; //총게시물갯수를 변수에 저장

        db.collection('post').insertOne({ _id :  총게시물갯수 + 1, title : request.body.title, date :  request.body.date}, function(error, result){
            console.log('저장완료');

            //counter 콜렉션에 있는 totalPost 항목도 1 증가시켜야 함 
            db.collection('counter').updateOne({name : '게시물갯수'},{ $inc : {totalPost:1} },function(error,result){
                if(error){return console.log(error)}
                respond.send('전송완료');
                //콤마 부터 function 콜백함수 없어도 된다. 하지만 에러를 체크해야 하므로 적어준다.
            })
            //updateOne({어떤데이터를 수정할지},{수정값})
            //{ $set:{totalPost: 바꿀 값} }
            //{ $inc:{totalPost: 기존 값에 더해줄 값}}
        });

    }); 
    
    //(request.body) body.뒤에는 구체적인 뭘꺼낼건지 적으면 됨.
});

app.get('/list', function(request, respond){ //db꺼내서 html로 보기
       db.collection('post').find().toArray(function(error, result){ 
    //다가져와라
    console.log(result); //콘솔에 찍어주고 
    respond.render('list.ejs', { posts : result });
   });

   
});