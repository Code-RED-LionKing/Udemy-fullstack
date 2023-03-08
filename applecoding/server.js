const express = require('express'); //서버참고해서 요청
const app = express();// 객체만들어 주세요

app.listen(8080, function() {

    console.log('listening on 8080')
}); //.listen 서버열수있음 8080포트에 띄워

app.get('/pet', function(request, respond) {
    respond.send('펫 용품을 쇼핑할 수 있는 페이지 입니다.');
});

app.get('/' , function(request, respond) {
    respond.sendFile(__dirname + '/index.html')
});