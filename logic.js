const url = require('url');


exports.getRequest = function (req, res) {
    var response = {
        "data": "Hello World, Welcome to WeJapa Internships"
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};


exports.postRequest = function (req, res) {
    let body = '';

    req.on('data', function (chunkData) {
        body += chunkData;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);
        var response = {
            "data": `Hello ${postBody.name}, Welcome to WeJapa Internships`
        };

        //send status code, set header and the response
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    });
};

