/**
 * Created by rohit on 4/3/16.
 */

var page = require('webpage').create();
page.open('http://www.jabong.com', function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        page.render('example.png');
    }
    phantom.exit();
});