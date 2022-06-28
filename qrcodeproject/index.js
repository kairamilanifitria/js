const QRCode = require('qrcode');

// START

const QrGenerate = async text => {
    try {
        const qr = await QRCode.toString(text, {type: 'terminal'});
        console.log(qr);
    }catch(err){
        console.log(err)
    }
}; 
QrGenerate('https://https://bisa.ai/');