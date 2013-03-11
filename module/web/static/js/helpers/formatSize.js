// Format bytes in human readable format
define('helpers/formatSize', ['handlebars'], function(Handlebars) {
    var sizes = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB"];
    function formatSize(bytes, options) {
        if (!bytes || bytes === 0) return '0 B';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        // round to two digits
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }

    Handlebars.registerHelper('formatSize', formatSize);
    return formatSize;
});