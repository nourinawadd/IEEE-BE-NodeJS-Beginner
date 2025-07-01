const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    switch(parsedUrl.pathname){
        case '/add':
            res.end(String( Number(parsedUrl.query.a) + Number(parsedUrl.query.b) ));
            break;
        case '/subtract':
            res.end(String( Number(parsedUrl.query.a) - Number(parsedUrl.query.b) ));
            break;
        case '/multiply':
            res.end(String( Number(parsedUrl.query.a) * Number(parsedUrl.query.b) ));
            break;
        case '/divide':
            if (Number(parsedUrl.query.b) == 0) {
                res.statusCode = 400;
                res.end('Cannot divide by zero');
            } else {
                res.end(String( Number(parsedUrl.query.a) / Number(parsedUrl.query.b) ));
            }
            break;
        default:
            res.statusCode = 404;
            res.end('Not Found');
            break;
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});