var C = 40;
var W = 800 + 2 * C;
var H = 600 + 2 * C;

var _dos_speed = 25
;

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

var _score;
var _times;
var _timer;

var _tb = document.getElementById("tb");



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

    _times = 0;
    _score = 0;
    _timer = setInterval(mainTime,1000);
}

function addTB(str){
	if(str=="clear"){
		_tb.innerHTML = "";
		return;
	}
	_tb.innerHTML += "<p>"+str+"</p>";
}

function mainTime(){
	_times++;
	if(_times>3600) _times = 0;
	updateMT();
}

function updateMT(){
	_ctx_1.clearRect(0,0,W,C);
	_ctx_1.fillStyle = "white";
    _ctx_1.font = "30px Arial";
    var m = Math.floor(_times/60);
    var s = _times%60;
    var str = "Time: "
    if(m<10) str += "0"+m+":";
    else str += m+":";
    if(s<10) str += "0"+s;
    else str += s;
    _ctx_1.fillText(str, getX(1), getY(-1));
    _ctx_1.fillText("Score: "+_score, getX(12),getY(-1));
}

function updateScore(){
	_score = 0;
	_score += _map1_rec+_map2_rec+(_map3_record+1)*7;
	_score += _map8_rec;
    _score += _map6_li*7;
    _score += m4s*7;
    _score += _map7_rec;
	updateMT();
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
