cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  },
  {
    "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
    "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
    "pluginId": "phonegap-plugin-barcodescanner",
    "clobbers": [
      "cordova.plugins.barcodeScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-swift-support": "3.1.1",
  "cordova-plugin-tts": "0.2.3",
  "cordova-plugin-whitelist": "1.3.3",
  "phonegap-plugin-barcodescanner": "7.0.4"
};
// BOTTOM OF METADATA
});