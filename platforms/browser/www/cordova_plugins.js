cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-clipboard-x/www/clipboard.js",
        "id": "cordova-plugin-clipboard-x.Clipboard",
        "pluginId": "cordova-plugin-clipboard-x",
        "clobbers": [
            "cordova.plugins.clipboard",
            "cordova.plugins.clipboard-x"
        ]
    },
    {
        "file": "plugins/nl.madebymark.share/www/share.js",
        "id": "nl.madebymark.share.Share",
        "pluginId": "nl.madebymark.share",
        "clobbers": [
            "window.navigator.share"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-clipboard-x": "1.0.1",
    "nl.madebymark.share": "0.1.1",
    "cordova-plugin-network-information": "2.0.1"
}
// BOTTOM OF METADATA
});