/**
 * Created by dantegg on 2016/11/2.
 */
const net = require('net')
const server = net.createServer((socket) => {
    console.log('new connection', socket.remoteAddress)
    socket.write('Hello client')
    socket.on('data',(data)=>{
        console.log('Server received from ', socket.remoteAddress,data.toString())
    })
    socket.on('end',()=>{
        console.log('socket closed',socket.remoteAddress)
    })
})


server.listen(4000)