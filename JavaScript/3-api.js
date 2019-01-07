'use strict';

const fs = {

  readFile: (path, options, callback = options) => {
    setTimeout(() => {
      callback(err, Buffer.from('File content'));
    }, 0);
  },

  writeFile: (file, data, options, callback = options) => {
    setTimeout(() => {
      callback(null);
    }, 0);
  },

  promises: {
    readFile: (path, options) => Promise.resolve(Buffer.from('File content')),
    writeFile: (file, data, options) => Promise.resolve(),
  }

};

// Usage

fs.writeFile('file.ext', 'FileContent', 'utf8', err => {
  if (err) throw err;
  else console.log('saved successfully');
});

fs.promises.readFile('file.ext', 'utf8')
  .then(data => {
    console.log('file content:', data);
  })
  .catch(err => {
    if (err) throw err;
  });
