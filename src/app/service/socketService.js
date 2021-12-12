let getSocket = null

module.exports.setIo = (server) => {
    const io = require('socket.io')(server)
    io.on('connection', (client) => {
        console.log('connected socket...')

        io.emit('msg', 'ali')
        client.on('disconnect', () => {
            console.log('disconnected socket...')
        })
    })

    getSocket = io
}

module.exports.getIo = () => {
    return getSocket
}
