var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f])

console.log(bin[0])
var str = bin.toString('utf-8')
console.log('test', str)

var net = require('net')

var options = {
    port: 80,
    host: 'www.baidu.com'
}

var client = net.connect(options, function() {
    client.write([
        'GET / HTTP/1.1',
        'User-Agent: curl/7.26.0',
        'Host: www.baidu.com',
        'Accept: */*',
        '',
        ''
    ].join('\n'))
})

client.on('data', function(data){
    console.log(data.toString())
    client.end()
})