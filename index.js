/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qrcode from 'qrcode';

inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Enter URL:',
  }
]).then((answers) => {
  const url = answers.url; // ✅ Now 'url' is inside the block

  qrcode.toFile('qr.png', url, {
    color: {
      dark: '#000',  // black dots
      light: '#fff'  // white background
    },
    parse_url: true 
  }, function (err) {
    if (err) throw err;
    console.log('✅ QR code saved as qr.png');
  });
});
