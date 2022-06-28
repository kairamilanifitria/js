const QRCode = require('qrcode');

// START

const QrGenerate = async text => {
    try {
        await QRCode.toFile('./bisaai.png', text)
    } catch(err){
        console.log(err);
    }
}
QrGenerate('https://https.google.com/');