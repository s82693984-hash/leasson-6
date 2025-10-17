let qrInstance = null;

function generateQR() {
    const url = document.getElementById('urlInput').value.trim();
    const bgColor = document.getElementById('bgColor').value;
    const fgColor = document.getElementById('fgColor').value;
    const size = parseInt(document.getElementById('size').value);

    if (!url) {
        alert("Iltimos, URL kiriting!");
        return;
    }

    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Oldingi QR kodni tozalash

    if (qrInstance) {
        qrInstance.clear(); // Agar oldin yaratilgan bo'lsa, tozalash
    }

    qrInstance = new QRCode(qrcodeContainer, {
        text: url,
        width: size,
        height: size,
        colorDark: fgColor,
        colorLight: bgColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}