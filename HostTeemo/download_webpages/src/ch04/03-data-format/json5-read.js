var JSON5 = require('json5');


var fs = require('fs');

var json = fs.readFileSync("test.json5", "utf-8");

var obj = JSON5.parse(json);

var items = obj.items;
for (var i in items) {
	var item = items[i];
	var name = item;
	console.log(name);
}
