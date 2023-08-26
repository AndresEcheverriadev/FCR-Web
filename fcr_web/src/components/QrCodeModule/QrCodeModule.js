import React from "react";
import QRCode from "qrcode.react";
import "./QrCodeModule.css";

function QrCodeModule({ url, id }) {
  const downloadQR = (idQR) => {
    const canvas = document.getElementById(`qr-gen${idQR}`);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${idQR}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="qrModuleContainer">
      <div className="qrContainer">
        <QRCode
          className="qrCanva"
          renderAs="canvas"
          id={`qr-gen${id}`}
          size={400}
          value={url}
          level={"H"}
          includeMargin={true}
          imageSettings={{ width: 200, height: 200 }}
        />
      </div>
      <button className="qrDownload" onClick={() => downloadQR(id)}>
        Descargar QR
      </button>
    </div>
  );
}

export default QrCodeModule;
