
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();

var text = "아버지가방에들어가신다";
mecab.parse(text, function(items) {
		for (var i in items) {
			var k = items[i];
			if (k == "EOS") continue;
			console.log(k[0] + ":" + k[1]);
		}
});
