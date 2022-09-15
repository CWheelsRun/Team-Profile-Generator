const fs = require("fs");

// Creates the html in the dist folder
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        message: "Index.html created in /dist folder!",
      });
    });
  });
};

// Copies the intended styles into the dist folder
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        message: "Style sheet copied into /dist folder!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };