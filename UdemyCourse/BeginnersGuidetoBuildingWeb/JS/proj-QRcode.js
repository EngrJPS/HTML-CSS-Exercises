/*
1. Use inquirer npm package to get user input.
2. Use the qur-image npm package to turn the user entered URL into a QR code image.
3. Create a text file to save the user input using the native FS node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fileSystem from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    {
        const link = answers.URL;
        let qr_png = qr.image(link, {type: 'png'});
        qr_png.pipe(fileSystem.createWriteStream("link_qr.png"));

        fileSystem.writeFile("userLink.txt", link, (err) => {
            if(err) console.error(err);
            console.log("The file has been saved!");
        })
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

