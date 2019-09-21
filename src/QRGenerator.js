import React, { useState } from 'react'
import QRCode from 'qrcode.react'

const QRGenerator = (props) => {
    let [text, setText] = useState("");
    let [qrValue, setQrvalue] = useState("");

    const GeneratingQR = (evet) => {
        setQrvalue(text)
        console.log(text);
    }

    const ClearField = () => {
        setText("")
    }

    const Download = () => {
        const canvas = document.getElementById("123456");

        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrCode.png"

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

    }

    return (
        <div className=" pt-5">
            <h2 className="">QR Code Generator</h2>
            <div className="font-weight-bold mt-3">Enter Text :</div>
            <div>
                <input type="text"
                    name="link"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="mt-2 pb-4">
                <button type="button" className="btn btn-success" onClick={GeneratingQR}>Get QR Code </button>
                <button type="button" className="btn btn-danger" onClick={ClearField}>Clear</button>
            </div>

            <QRCode value={qrValue} size={200}
                id="123456"
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={true}
                renderAs={"canvas"} />
            <div>
                <button type="button" className="btn btn-success" onClick={Download}>Download QR</button>
            </div>

        </div>
    );

}

export default QRGenerator;