function handle(request, response) {

	response.writeHead(200, {
		'Content-Type': 'text/html'
	});

	response.write('<!DOCTYPE "html">');
	response.write('<html>');
	response.write('<head><title>Teste</title></head>');
	response.write('<body>');
	response.write('<h1>Teste</h1>');
	response.write('</body>');
	response.write('</html>');
	response.end('2');
}

module.exports = handle;