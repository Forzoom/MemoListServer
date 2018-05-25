import koaBody = require('koa-body');
import http = require('http');
import * as Koa from 'koa';

const app = new Koa();

app.env = 'staging';
app.keys = [
    'forzoom'
];

app.use(koaBody({formidable: {uploadDir: __dirname}}));

import router from './router/index';
app.use(router.routes());

const server = http.createServer(app.callback());
const port = 3456;
server.listen(port);
server.on('error', function(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch(error.code) {
        case 'EACCES':
            console.error('Port ' + port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('Port ' + port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', function() {
    console.log('Server listening on ' + port);
});