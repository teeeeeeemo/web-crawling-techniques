var MAX_WORD = 40;

var Mecab = require('/Users/Lucia/Documents/WebCrawlingTechniques/HostTeemo/download_webpages/src/ch05/02-mecab/mecab-mod.js');
var mecab = new Mecab();
var fs = require('fs');

var lineByLine = require('n-readlines');

var args = process.argv;
args.shift();
args.shift();

if(args.length <= 0 ) {
	console.log('node correct.js textfile');
	process.exit();
}

var filename = args.shift();

var liner = new lineByLine(filename);

var line;
var lineno = 1;

while ( line = liner.next()) {
	var res = mecab.parse(line);
	checkSentence(line, res, lineno);
	lineno++;
}

function checkSentence(line, items, lineno) {
	var cnt = 0;
	var cur = [];
	var conj = {};

	for (var i in items) {
		var it = items[i];
		var word = it[0];
		var pos = it[1];

		if (word == "EOS" ) {
			for (var i in conj) {
				if (conj[i] > 1 ) {
					console.log("[경고] 한 줄에 같은 접속사 <" + i + ">가 " + conj[i] + "번 사용");
					console.log("(" + lineno + "행)" + line + "\n");
				}
			}

		cur = [];
		cnt = 0;
		conj = {};
		continue;
	}

	cur.push({word:word, pos:pos});

	if (word == ".") {
		if(cnt >= 3) {
			console.log("[경고] 조사 '의'가 하나의 문장에 " + cnt + "회 사용");
			console.log("(" + lineno + "행)" + line + "\n");
		}

	if (cur.length >= MAX_WORD) {
		console.log("[경고] 너무 긴 문장 길이");
		console.log("(" + lineno + "행)" + line + "\n");
	}

	cnt = 0;
	cur = [];
	}

	if(it[0] == '의' && it[1] == "JKG") 
		cnt++;

	if(it[1] == "MAJ") {
		if(typeof(conj[word]) == "undefined") {
			conj[word] = 1;
		} else {
			conj[word]++;
		}
	}
	}
}
