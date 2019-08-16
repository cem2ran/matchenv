var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

exec(require.resolve(path.join('bs-platform', 'lib', 'bsb.exe')), function(err, stdout, stderr) {
  if (err) {
    console.error(stdout, stderr);
    return;
  }
  
  var stream = fs.createReadStream(path.join(__dirname, 'lib', 'bs', 'bytecode', 'matchenv'))
    .pipe(fs.createWriteStream('matchenv'));

  stream.on('finish', function () {
    fs.chmodSync('matchenv', '755');
    console.log("Successfully built matchenv!");
  });
});
