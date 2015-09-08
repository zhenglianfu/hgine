/**
 * engine's core methods
 */

/**
 * constructor of Hgine
 * @param string|HTMLCanvasElement
 **/
function Hgine(canvas){
    var type = (typeof canvas);
    if (type === 'string') {
        return new Hgine(document.getElementById(canvas));
    } else if (type === 'object' && canvas instanceof HTMLCanvasElement) {
        // constructor

    } else {
        return new Error('there is no HTMLCanvasElement existed');
    }
}

Hgine.prototype = {};