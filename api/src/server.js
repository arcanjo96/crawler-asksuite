require('dotenv').config()

const server = require('./app');
const port = +process.env.PORT || 3333

server.listen(port);
console.log(`Server connected.\nhttp://localhost:${port}/api`);