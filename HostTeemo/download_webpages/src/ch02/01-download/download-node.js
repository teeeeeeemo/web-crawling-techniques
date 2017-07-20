// url에 있는 파일을 savepath에 다운로드 

// 다운로드할 URL 지정
var url = "http://jpub.tstory.com/";

// 저장 위치 지정 
var savepath = "test.html";

// 사용 모듈 정의 
var http = require('http'); // HTTP module
var fs = require('fs'); 	// 파일 처리 관련 module

// 출력 지정 
var outfile = fs.createWriteStream(savepath);

// 비동기로 URL의 파일 다운로드 
http.get(url, function(res) {
	res.pipe(outfile);
	res.on('end', function() { // 
		outfile.close();
		console.log("ok");
	});
});