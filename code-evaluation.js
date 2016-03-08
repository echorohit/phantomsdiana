/**
 * Created by rohit on 7/3/16.
 */
var page = require('webpage').create(),
        system = require('system'),
        t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
page.onConsoleMessage = function(msg) {
    console.log('Page title is ' + msg);
};

page.open(address, function(status) {
    page.evaluate(function() {
        console.log(document.title);
    });
    phantom.exit();
});