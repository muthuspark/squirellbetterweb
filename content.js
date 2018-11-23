var beautiful_font_url = '//fonts.googleapis.com/css?family=Quicksand:300,400,500,700';
var beautiful_font_name = 'Quicksand'; //love this font.
var default_fallback_font = 'arial';

//create the link tag.
var font = document.createElement("link");
font.setAttribute("href", beautiful_font_url);
font.setAttribute("rel", "stylesheet");
font.setAttribute("type", "text/css");

//catch hold of the head tag.
var head = document.getElementsByTagName('head');

function injectStyles() {

    head[0].appendChild(font);

    function addNewStyle(newStyle) {
        var styleElement = document.getElementById('styles_js');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = 'styles_js';
            head[0].appendChild(styleElement);
        }
        styleElement.appendChild(document.createTextNode(newStyle));
    }

    /**
     * list of tags I want the font to be changed, not including <div>, <span> and <i> 
     * because often they are used for font-awesome or similar icons.
     */
    var tags = ['p', 'td', 'input', 'h1', 'h2', 'h3', 'h4', 'a', 'button', 'body'];
    for (var j = 0; j < tags.length; j++) {
        addNewStyle(tags[j] + ' {font-family: \'' + beautiful_font_name + '\', ' + default_fallback_font + ' !important;}');
    }
    addNewStyle('code span{font-family: inherit !important;}body{--x-height-multiplier: 0.35;--baseline-multiplier: 0.179;}');
    addNewStyle('body{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}');
}

if (head && head.length != 0) {
    //inject immediately
    injectStyles();
} else {
    //wait till you find the head tag.
    var number_of_times_run = 0;
    var timer_process_id = setInterval(function() {
        number_of_times_run += 1;
        if (head && head.length != 0) {
            clearInterval(timer_process_id);
            injectStyles();
        }

        if (number_of_times_run > 20) {
            //what the fuck is this website with no head tag, funny I know, lets just stop!
            clearInterval(timer_process_id);
        }
    }, 200);
}