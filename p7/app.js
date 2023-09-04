const fs = require('fs');


try {
    fs.writeFileSync('data/text.txt', 'hello world syncronus');
} catch (e) {
    console.log(e);
}