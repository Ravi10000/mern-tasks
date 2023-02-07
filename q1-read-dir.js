const { readdir } = require("fs");

const DIRECTORY = "./";

readdir(DIRECTORY, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
