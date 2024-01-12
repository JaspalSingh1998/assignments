const fs = require('fs');

function cleaner() {
    const filePath = __dirname + '/data.txt';

    let data = fs.readFileSync(filePath, {encoding: 'utf-8', flag: 'r'})
    data = data.replace(/\s+/g, ' ');
    fs.writeFileSync(filePath, data)
}

cleaner()
