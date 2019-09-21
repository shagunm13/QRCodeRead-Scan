import React from 'react'
import QRReaders from 'react-qr-reader'

const QRReader = (props) => {


    const handleScan = data => {
        if (data) {
            console.log(data)
            let url = String(data).startsWith('http') ? data : 'http://' + data
            window.open(url, '_blank');
        }
    }

    const handleError = err => {
        if (err)
            console.error(err)
    }

    return (
        <div>
            <h2 className="">QR Code Scanner</h2>
            <QRReaders
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: 400, height: 400 }}
            />
        </div>
    )
}

export default QRReader;


