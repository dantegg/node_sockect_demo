/**
 * Created by dantegg on 2016/11/2.
 */
const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:4000/test')

ws.on('open',function open() {
    console.log('connected')

    ws.on('message',function (message) {
        console.log('on message',message)
    })

    setInterval(function () {
        ws.send(''+new Date(),{mask:true})
    },1000)
})