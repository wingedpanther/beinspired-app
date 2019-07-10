cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-clipboard-x.Clipboard",
      "file": "plugins/cordova-plugin-clipboard-x/www/clipboard.js",
      "pluginId": "cordova-plugin-clipboard-x",
      "clobbers": [
        "cordova.plugins.clipboard",
        "cordova.plugins.clipboard-x"
      ]
    },
    {
      "id": "nl.madebymark.share.Share",
      "file": "plugins/nl.madebymark.share/www/share.js",
      "pluginId": "nl.madebymark.share",
      "clobbers": [
        "window.navigator.share"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-clipboard-x": "1.0.1",
    "nl.madebymark.share": "0.1.1",
    "cordova-plugin-network-information": "2.0.1"
  };
});