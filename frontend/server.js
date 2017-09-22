const path = require('path');
const express = require('express');
const app = express();

// Static file server
app.use('/build', express.static('build', {
  maxAge: 31536000000, // in ms format, cache for 1 year
}));

app.use('/ping/', (req, res) => {
  res.end('OK');
});

// Any route not matching requesting a static file should send the index.html
// file
app.get(/\/(.*)/, function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 80, function () {
  console.log('UI server started!');
})