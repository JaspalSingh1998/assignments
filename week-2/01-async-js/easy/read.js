const fs = require('fs');
// function readFromFile() {
//     let filePath = __dirname + '/data.txt';
//     const data = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'})
//     console.log(data);
// }

function readFromFile() {
    let filePath = __dirname + '/data.txt';
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.log('Error in reading data from file.');
        }else {
            console.log(data);
        }
    })
}

readFromFile();