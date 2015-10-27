_map_event[2] = [172, 212, 252, 236];

var _map3_off = [0, 0, 0];
var _map3_count = 0;
var _map3_bird = [];
_map3_bird[0] = new Image();
_map3_bird[0].src = "map3/bird_0.png";
_map3_bird[1] = new Image();
_map3_bird[1].src = "map3/bird_1.png";

var _map3_pipe = 0;
var _map3_score = 0;
var _map3_record = -1;
var _map3_a = 10;
var _map3_v = 0;
var _map3_y = 0;
var _map3_xv = 4;
var _map3_timer;

function initalMap3() {
    updateMap3();
    if(_map3_record!=-1){
    	_ctx_1.clearRect(getX(14),getY(4),getX(16),getY(5));
		_ctx_1.fillStyle="#FF0000";
		_ctx_1.font = "24px Arial";
		_ctx_1.fillText("Record: "+_map3_record,getX(14),getY(5.5));
    }
}

function startMap3Event(x, y) {
    if (y == 8) {
        _map3_off[0] = 1 - _map3_off[0];
    }
    if (y == 10) {
        _map3_off[1] = 1 - _map3_off[1];
    }
    if (y == 12) {
        _map3_off[2] = 1 - _map3_off[2];
    }
    if (x != 16) {
        updateMap3();
        endEvent();
        return;
    }
    _map3_count = 0;
    drawDos(x, y);
    _map3_timer = setInterval(function() {
        map3Tick();
    }, 100);

}

function updateMap3() {
    drawImg("map3/back_" + _map3_off[1] + ".png", 2, 2);
    clearCell(13, 8);
    clearCell(14, 8);
    clearCell(13, 10);
    clearCell(14, 10);
    clearCell(13, 12);
    clearCell(14, 12);
    _ctx_1.clearRect(getX(2), getY(2), getX(8), getY(12));
    drawImg("map3/chose_" + _map3_off[0] + ".png", 13, 8);
    drawImg("map3/chose_" + _map3_off[1] + ".png", 13, 10);
    drawImg("map3/chose_" + _map3_off[2] + ".png", 13, 12);
}

function map3Tick() {
    if (_map3_off[1] == 1) {
        _ctx_2.fillStyle = "white"
    } else {
        _ctx_2.fillStyle = "black"
    }

    if (_map3_count >= 0 && _map3_count < 11) {
        map3DrawPipe((_map3_count * 40) % 440, 3);
        _ctx_2.drawImage(_map3_bird[_map3_off[1]], getX(5), getY(6.5));
    }

    if (_map3_count == 11) {
        _ctx_2.clearRect(getX(2), getY(2), 8 * C, 11 * C);
        _ctx_2.font = "40px Arial";
        _ctx_2.fillText("Click Mouse",
            getX(3.5), getY(6));
        _ctx_2.fillText("to let the bird fly",
            getX(2.5), getY(7.5));
        _map3_count = 420;
        _layer_2.onmousedown = map3Down;
        _layer_2.onmouseup = map3Up;
        _map3_a = 1;
        _map3_v = 0;
        _map3_y = getY(6.5);
        if(_map3_off[2]==0)
        	_map3_xv = 6;
        else 
        	_map3_xv = 4;
        _map3_score = 0;
        return;
    }
    if (_map3_count >= 440) {

        if ((_map3_count * _map3_xv) % 440 == 0){
            _map3_pipe = Math.floor(Math.random() * 7);
            _map3_score++;
        }
        map3DrawPipe((_map3_count * _map3_xv) % 440, _map3_pipe);
        if(_map3_off[0]==0){
        	_map3_v += _map3_a;
        }
        else{
        	_map3_v = _map3_a;
        }

        _map3_y += _map3_v;
        _ctx_2.drawImage(_map3_bird[_map3_off[1]], getX(5), _map3_y);
        if (_map3_y < getY(2) || _map3_y > getY(11)) {
        	map3Die();
       	}

        if ((_map3_count * _map3_xv) % 440 <= getX(7) 
        	&& (_map3_count * _map3_xv) % 440 >= getX(3)) {
        	if(_map3_y<=getY(2.5+_map3_pipe)
        		||_map3_y>=getY(4.5+_map3_pipe)){
        		map3Die();
        	}
        }

    }

	_map3_count++;
}

function map3Die(){
	clearInterval(_map3_timer);
	if(_map3_score*(2-_map3_off[0])>_map3_record){
		_map3_record = _map3_score*(2-_map3_off[0]);
	}
	_ctx_1.clearRect(getX(14),getY(4),getX(16),getY(5));
	_ctx_1.fillStyle="#FF0000";
	_ctx_1.font = "24px Arial";
	_ctx_1.fillText("Record: "+_map3_record,getX(14),getY(5.5));
	endEvent();
}

function map3Down(e) {
    _map3_a = -1;
}

function map3Up(e) {
    _map3_a = 1;
}


function map3DrawPipe(x, y) {
    _ctx_2.clearRect(getX(2), getY(2), 8 * C, 11 * C);

    var wid = Math.min(3 * C, x);
    var wid = Math.min(wid, 440 - x);
    var wix = getX(10) - x;
    wix = Math.max(getX(2), wix);
    _ctx_2.fillRect(wix, getY(2), wid, C + y * C);
    _ctx_2.fillRect(wix, getY(2 + 1 + y + 2), wid, (7 - y) * C);

}
