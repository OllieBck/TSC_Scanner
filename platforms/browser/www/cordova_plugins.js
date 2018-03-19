cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "id": "cordova-plugin-qrscanner.QRScanner",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "file": "plugins/cordova-plugin-qrscanner/src/browser/plugin.min.js",
        "id": "cordova-plugin-qrscanner.QRScannerProxy",
        "pluginId": "cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "phonegap-plugin-barcodescanner.BarcodeScannerProxy",
        "pluginId": "phonegap-plugin-barcodescanner",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "id": "cordova-plugin-tts.tts",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-qrscanner": "2.5.0",
    "cordova-plugin-swift-support": "3.1.1",
    "cordova-plugin-whitelist": "1.3.3",
    "phonegap-plugin-barcodescanner": "7.0.4",
    "cordova-plugin-tts": "0.2.3"
}
// BOTTOM OF METADATA
});