var head = document.getElementsByTagName('head');
if (head && head.length != 0) {
    var fontstyle = document.createElement("link");
    fontstyle.setAttribute("href", "//fonts.googleapis.com/css?family=Assistant:300,400,600,700");
    // fontstyle.setAttribute("href", "https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i,700,700i");
    //
    fontstyle.setAttribute("rel", "stylesheet");
    head[0].appendChild(fontstyle);

    function addNewStyle(newStyle) {
        var styleElement = document.getElementById('styles_js');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = 'styles_js';
            document.getElementsByTagName('head')[0].appendChild(styleElement);
        }
        styleElement.appendChild(document.createTextNode(newStyle));
    }

    document.body.style['font-family'] = 'Assistant';
    //document.body.style['background-color'] = 'white';
    //document.body.style['font-size'] = '18px';
    //document.body.style['line-height'] = '1.48';
    document.body.style['font-weight'] = '300';

    //document.body.style['color'] = '#333';
    var tags = ['p', 'td', 'input', 'h1', 'h2', 'h3', 'h4','a','span'];
    for (var j = 0; j < tags.length; j++) {
        addNewStyle(tags[j]+' {font-family: \'Assistant\';}');
    }

    addNewStyle('code span{font-family: inherit !important;}body{--x-height-multiplier: 0.35;--baseline-multiplier: 0.179;}');

}