const fs = require('fs');
const path = require('path');
const templateDir = __dirname + '/template/';

const getFiles = (basePath, subPath = []) => {
  let files = [];
  let _path = path.join(basePath, subPath.join('/'));
  if (fs.statSync(_path).isFile()) {
    return [_path];
  }

  for (file of fs.readdirSync(_path)) {
    let filePath = path.join(_path, file);
    if (fs.statSync(filePath).isDirectory()) {
      files = files.concat(getFiles(filePath));
    } else {
      files.push(filePath);
    }
  }
  return files;
};

module.exports = {
  fileList: (subPath = ['default']) => {
    return getFiles(templateDir, subPath).map(value =>
      value.replace(templateDir + subPath.concat(['']).join('/'), '')
    );
  },
  isFile: file => fs.existsSync(file),
};
