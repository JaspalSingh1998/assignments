const fs = require('fs');

function writeToFile() {
    const filePath = __dirname + '/data.txt';
    const content = "I'm going to write this in the file wooohhooo!";

    fs.writeFile(filePath, content, err => {
        if(err) {
            console.log('Error writing into the file.', err)
        }
    })
}

writeToFile();