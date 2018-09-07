var proc_id = setInterval(function() {
    var head = document.getElementsByTagName('head');
    console.log('1');
    if (head && head.length != 0) {
        clearInterval(proc_id);
        console.log('2');
        var fontstyle = document.createElement("link");
        fontstyle.setAttribute("href", "//fonts.googleapis.com/css?family=Quicksand:300,400,500,700");
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

        document.body.style['font-family'] = 'Quicksand';
        //document.body.style['background-color'] = 'white';
        //document.body.style['font-size'] = '18px';
        //document.body.style['line-height'] = '1.48';
        document.body.style['font-weight'] = '300';
        if (location.hostname == "mail.google.com") {
            // var tds = document.getElementsByTagName('td');
            // for (var i = 0; i < tds.length; i++) { tds[i].style['font-size'] = '100%'; }
            addNewStyle('td{font-size: 100% !important;border: none !important; padding-left:0px !important;}');
        }

        //document.body.style['color'] = '#333';
        var tags = ['p', 'td', 'input', 'h1', 'h2', 'h3', 'h4', 'a', 'span', 'button'];
        for (var j = 0; j < tags.length; j++) {
            addNewStyle(tags[j] + ' {font-family: \'Quicksand\';}');
        }
        addNewStyle('code span{font-family: inherit !important;}body{--x-height-multiplier: 0.35;--baseline-multiplier: 0.179;}');
        addNewStyle('body{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}');
    } 
}, 200);