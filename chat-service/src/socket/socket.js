const socketIO = require('socket.io');
const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = (server) => {
    const io = socketIO(server);

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`)
    
        socket.on('chat message', async (message) => {
            const msgRef = admin.firestore().collection('messages');

            // Save messages
            await msgRef.add({
                text: message,
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
            })

            io.emit('chat message', message)
        });
    
        socket.on('disconnect', () => {
            console.log(`Client got disconnected: ${socket.id}`)
        });
    });

    return io;
}