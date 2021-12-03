const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mock/backend.json');
const middlewares = jsonServer.defaults();


server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use((req, res, next) => {
    if(req.path === '/register' && req.method === 'POST') {
        res.json({response: true, message: ''})
    } else {
        next();
    }
});

server.use((req, res, next) => {
    if(req.path === '/login' && req.method === 'POST') {
        res.json({login: true, message: ''})
    } else {
        next();
    }
});

server.use(router);

server.listen(3000, () => {
    console.log('JSON server is running');
})