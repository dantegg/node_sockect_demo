/**
 * Created by dantegg on 2016/11/2.
 */
const ws = require('ws')

const wss = ws.createServer({
    port:4000
})

wss.on('connection',function (ws) {
    console.log('on connected', ws.upgradeReq.url,ws.upgradeReq.headers)

    ws.on('message',function (message) {
        console.log('on message',message)
        ws.send(message,{mask:true})
    })
})