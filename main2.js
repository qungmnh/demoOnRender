var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is home Page.</p></body></html>');
    res.write('<html><body><input type="button" value="Go back!" onclick="history.back()"><body></html>')
    res.end();
})

app.get('/student', function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.end();
})

app.get('/admin', function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is student Page.</p></body></html>');
    res.end();
})

const PORT = process.eventNames.PORT || 5000
app.listen(PORT)
console.log('Server is up and running')
