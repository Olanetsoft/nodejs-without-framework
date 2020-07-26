const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    const logic = require('./logic.js');

    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname == '/' && req.method === 'GET') {
        logic.getRequest(req, res);

        // POST Endpoint
    } else if (reqUrl.pathname == '/' && req.method === 'POST') {
        logic.postRequest(req, res);
    }
});