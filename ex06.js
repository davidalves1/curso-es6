var funcs = []

for (var i = 0; i < 10; i++) {
	funcs.push(function() {
		console.log(i);
	});	
}

funcs[2]();
funcs[8]();

var funcs = []

for (let j = 0; j < 10; j++) {
	funcs.push(function() {
		console.log(j);
	});	
}

funcs[2]();
funcs[8]();