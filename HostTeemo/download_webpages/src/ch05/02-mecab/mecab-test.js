var fs = require('fs');
var execSync = require('child_process').execSync;

var srcText = "찾아라. 그러면 발견할 것이다.\n";

parse(srcText, function(result) {
		for (var i in result) {
			var word = result[i][0];
			var pos = result[i][1];
			
			if(word == "EOS") continue;
			console.log(word + ":" + pos);
			}
});

function parse(text, callback) {

	fs.writeFileSync('TMP_INPUT_FILE', text, "utf-8");

	var cmd = [
		'mecab',
		'TMP_INPUT_FILE',
		'--output=TMP_OUTPUT_FILE'
	].join(" ");

	var opt = { encoding: 'UTF-8'};
	var res = [];

	try {
		execSync(cmd, opt);
		res = fs.readFileSync("TMP_OUTPUT_FILE", 'UTF-8');
	} catch (e) {
		console.log(e);
	}

	res = res.replace(/\r/g, "");
	res = res.replace(/\s+$/, "");
	var lines = res.split("\n");

	var res = lines.map(function(line) {
			return line.replace('\t', ',').split(',');
	});

	callback(res);

}
