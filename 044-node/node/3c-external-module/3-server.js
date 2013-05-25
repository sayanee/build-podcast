var connect = require("connect");

connect(connect.static(__dirname + "/public")).listen(8000);
// server up html and css pages
// with files public/index.html and public/css/styles.css
