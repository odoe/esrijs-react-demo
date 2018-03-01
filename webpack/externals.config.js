module.exports = [
  (context, request, callback) => {
    if (
      /^dojo/.test(request) ||
      /^esri/.test(request)
    ) {
      return callback(null, "amd " + request);
    }
    callback();
  }
];