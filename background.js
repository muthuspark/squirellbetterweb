function isCSPHeader(headerName) {
    return (headerName == 'CONTENT-SECURITY-POLICY') || (headerName == 'X-WEBKIT-CSP');
}

chrome.webRequest.onHeadersReceived.addListener(function(details) {
    for (i = 0; i < details.responseHeaders.length; i++) {
        if (isCSPHeader(details.responseHeaders[i].name.toUpperCase())) {
            var site = ' fonts.googleapis.com';
            site = site + ' fonts.gstatic.com';
            site = site + ' data:';
            var csp = details.responseHeaders[i].value;
            csp = csp.replace('font-src', 'font-src ' + site);
            csp = csp.replace('style-src', 'style-src ' + site);
            details.responseHeaders[i].value = csp;
        }
    }
    return { // Return the new HTTP header
        responseHeaders: details.responseHeaders
    };
}, {
    urls: ["*://*/*"],
    types: ["main_frame", "sub_frame"]
}, ["responseHeaders"]);