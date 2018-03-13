var fs = require('fs')

function copy(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
    copy(argv[0], argv[1])
}
// node cpTest.js test.png ~/Desktop/test1.png
main(process.argv.slice(2))