const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./logic.js');
    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname == '/' && req.method === 'GET') {
        //logging to see output on console
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);

        // POST Endpoint
    } else if (reqUrl.pathname == '/' && req.method === 'POST') {
        //logging to see output on console
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.testRequest(req, res);

    }
});