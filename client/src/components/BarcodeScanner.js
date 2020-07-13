import React from "react";
import Quagga from "quagga";

class BarcodeScanner extends React.Component {
  quaggaError = false;
  scanCount = 0;
  scannable = true;
  allScans = [];

  startQuagga = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Add",
          type: "LiveStream",
          target: this.Camera,
          constraints: {
            width: 700,
            height: 700,
          },
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          this.quaggaError = true;
          return;
        }

        Quagga.start();

        Quagga.onDetected((info) => {
          if (this.scanCount === 25 && this.scannable) {
            let finalBarcode;
            const allScansInfo = { mostOccuring: {}, max: 0 };
            this.allScans.forEach((barcode, i) => {
              if (!allScansInfo.mostOccuring[barcode]) {
                allScansInfo.mostOccuring[barcode] = 0;
              }
              allScansInfo.mostOccuring[barcode]++;

              if (allScansInfo.mostOccuring[barcode] > allScansInfo.max) {
                allScansInfo.max = allScansInfo.mostOccuring[barcode];
                finalBarcode = barcode;
              }
            });

            this.props.onScanned(finalBarcode);

            this.allScans = [];

            this.scannable = false;
            setTimeout(() => {
              this.scannable = true;
            }, 2000);

            if (this.scanCountTimeout) {
              clearTimeout(this.scanCountTimeout);
            }

            this.scanCount = 0;
          } else if (this.scannable) {
            this.allScans.push(info.codeResult.code);

            if (this.scanCountTimeout) {
              clearTimeout(this.scanCountTimeout);
            }
            this.scanCountTimeout = setTimeout(() => {
              this.scanCount = 0;
            }, 2000);

            this.scanCount++;
          }
        });
      }
    );
  };

  stopQuagga = () => {
    Quagga.stop();
  };

  render() {
    return (
      <div
        id="barcode-scan-container"
        ref={(Camera) => {
          this.Camera = Camera;
        }}
      ></div>
    );
  }
}

export default BarcodeScanner;
