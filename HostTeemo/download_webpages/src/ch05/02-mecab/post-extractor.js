var fs = require('fs');
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();

// 실행 인자 조사 
var args = process.argv;
args.shift(); // 실행 인자 목록에서 'node' 제거
args.shift(); // 실행 인자 목록에서 스크립트 이름 제거 


// 실행 인자가 없으면 프로그램 사용법 출력 
if (args.length != 2 ) {
	console.log("[USAGE] pos-words.js 입력 텍스트 품사");
	process.exit();
}

var inputfile = args.shift();
var txt = fs.readFileSync(inputfile, "utf-8");

var targetPos = args.shift();

mecab.parse(txt, function (items) {
		for (var i in items) {
			var k = items[i];
			var word = k[0];
			var pos = k[1];

			if( k == "EOS" ) continue;

			if (pos == targetPos) {
				console.log(word);
			}
	}
});


