const express = require('express')  
const serveStatic = require('serve-static')
const serveIndex = require('serve-index')
const opn = require('open')

// TODO: as indipendent library

const PORT = 6013;

const staticBasePath = './';

const app = express();

app.use(serveStatic(staticBasePath, {'index': 'index.html'}))  
app.use(serveIndex(staticBasePath, {'icons': true}))  
app.listen(PORT);

console.log(`Static server listening on port ${PORT}.`);
opn(`http://localhost:${PORT}/`);