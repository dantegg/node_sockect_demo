/**
 * Created by dantegg on 2016/11/2.
 */
const net = require('net')

const client = net.connect(4000,'127.0.0.1',()=>{
    console.log('connected')
    client.write("Hello, server")
    })

client.on('data',data=>{
    console.log('Server:',data.toString())
})

client.on('end',()=>{
    console.log('Connection closed')
})