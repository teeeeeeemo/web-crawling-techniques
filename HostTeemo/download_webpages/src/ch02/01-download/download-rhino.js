// url 에 있는 파일을 savepath에 다운로드 
//var url = "https://github.com/teeeeeeemo/sda.git";
var url = "http://sports.news.naver.com/";
var savepath = "test.html";

// 다운로드 
var aUrl = new java.net.URL(url);
var conn = aUrl.openConnection(); // URL에 접속 
var ins = conn.getInputStream(); // 입력 스트림을 획득 
var file = new java.io.File(savepath); // 출력 스트림을 획득 
var out = new java.io.FileOutputStream(file);

// 입력 스트림을 읽으면서 출력 스트림에 쓴다 
var b;
while ((b = ins.read()) != -1 ) {
	out.write(b);
}

out.close(); // 출력 스트림 닫기 
ins.close(); // 입력스트림 닫기

