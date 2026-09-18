const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello DevOps! My first DevOps project is working.");
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});