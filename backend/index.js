const express = require("express");  // express 라는 변수에 require 함수저장느낌

const app = express();  // app 객체 생성

app.listen(5001,()=>{       // 포트 5001의 서버 시작
    console.log("cykor");   // 시작되면 cykor 출력 ()=>{ ㅁㅁ } 서버 시작되면 ㅁㅁ 실행
})

// function serverStarted() {
//     console.log("cykor");
// }

// app.listen(5001, serverStarted); 와 같음


