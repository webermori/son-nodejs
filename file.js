var fs = require('fs');

fs

.writeFile('data.txt','Teste', function(err)) {
	if (err) {
		throw err;
	}
}