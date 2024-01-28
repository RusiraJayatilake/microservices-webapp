const express = require('express');
const http = require('http');
const appRoutes = require('./src/routes/routes');
const socketHandler = require('./src/socket/socket');

require('dotenv').config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT;
const io = socketHandler(server);

app.use('/services/', appRoutes);


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
});
