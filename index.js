
const fs = require('fs');
var http = require('http')
http.createServer((req, res) => {
    let date = new Date();
    //write the date and time in file
    fs.writeFileSync("currentDateTime.txt", `${date}`);

    //read form the file
    const data = fs.readFileSync("currentDateTime.txt", 'utf8');

    //giving the response
    res.write(data);
    res.end();
}).listen(8000);