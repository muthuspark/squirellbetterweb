var proc_id = setInterval(function() {
    var head = document.getElementsByTagName('head');
    console.log('1');
    if (head && head.length != 0) {
        clearInterval(proc_id);
        console.log('2');
        var fontstyle = document.createElement("link");
        fontstyle.setAttribute("href", "//fonts.googleapis.com/css?family=Quicksand:300,400,500,700");
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

        document.body.style['font-family'] = 'Quicksand';
        
        var tags = ['p', 'td', 'input', 'h1', 'h2', 'h3', 'h4', 'a', 'span', 'button'];
        for (var j = 0; j < tags.length; j++) {
            addNewStyle(tags[j] + ' {font-family: \'Quicksand\';}');
        }
        addNewStyle('code span{font-family: inherit !important;}body{--x-height-multiplier: 0.35;--baseline-multiplier: 0.179;}');
        addNewStyle('body{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}');
    } 
}, 200);