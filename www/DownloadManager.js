var exec = require('cordova/exec');

exports.download = function(options, success, error) {
    exec(success, error, "DownloadManager", "download", [options.url, options.title, options.description, options.path]);
};
