var C = 40;
var W = 800 + 2 * C;
var H = 600 + 2 * C;

var _dos_speed = 50;

var _layer_2 = document.getElementById("layer1");
var _ctx_2 = _layer_2.getContext("2d");
var _layer_1 = document.getElementById("layer2");
var _ctx_1 = _layer_1.getContext("2d");

var _deco = document.getElementById("boardDec");

var _map_id = 5;

var _memo_x;
var _memo_y;
var _memo_mapID;
var _memo_ori;


onload = function() {
    init();
}

function init() {
    _layer_2.width = W;
    _layer_2.height = H;

    _layer_1.width = W;
    _layer_1.height = H;

    createSmallMap();


    _dos_w = Math.floor(_dos.width / 4);
    _dos_h = Math.floor(_dos.height / 4);
    _walk_step = 0;
    _walk_orie = 2;
    _dos_x = 9;
    _dos_y = 8;

    enterMap(_map_id);

    _layer_2.onmousedown = moveDos;

    
}


function clearCell(x,y){
    _ctx_1.clearRect(getX(x), getY(y),C,C);
}

function drawImg(src, x, y) {
    var img = new Image();
    img.src = src;
    img.onload = function() {
        _ctx_1.drawImage(img, getX(x), getY(y));
    };
}


function getX(x) {
    return x * C + C;
}

function getY(y) {
    return y * C + 2 * C;
}

function addEvent(x, y) {
    var index = _map_event[_map_id - 1].indexOf(y * 20 + x);
    if (index != -1)
        return false;
    else {
        index = _map_event[_map_id - 1].indexOf(-1);
        if (index != -1)
            _map_event[_map_id - 1][index] = (y * 20 + x);
        else
            _map_event[_map_id - 1].push(y * 20 + x);
        return true;
    }
}

function deleteEvent(x, y) {
    var index = _map_event[_map_id - 1].indexOf(y * 20 + x);
    if (index != -1) {
        _map_event[_map_id - 1][index] = -1;
        return true;
    } else {
        return false;
    }
}
