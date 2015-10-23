var _dos = new Image();
_dos.src = "src/dos.png";

var _dos_w, _dos_h;
var _walk_tick = null;
var _walk_step = 0;
var _walk_orie = 2;
var _goal_x;
var _goal_y;
var _dos_x;
var _dos_y;

function moveDos(e) {
    x = Math.floor(e.layerX / C) - 1;
    y = Math.floor(e.layerY / C) - 2;
    if(_event){
        if(Math.abs(x-_dos_x)<2&&y==_dos_y-2){
            startEvent();
            return;
        }
    }
    if (canNotWalk(x, y)) return;
    _goal_x = x;
    _goal_y = y;
    _event = false;
    if (_walk_tick == null&&(_dos_x!=_goal_x||_dos_y!=_goal_y))
        _walk_tick = setInterval(function() {
            walking();
        }, _dos_speed);
}

function walking() {

    if (_walk_step == 0) {


        var _vert = _goal_y - _dos_y;
        var _hori = _goal_x - _dos_x;
        if (Math.abs(_vert) >= Math.abs(_hori) && !(Math.abs(_vert) == Math.abs(_hori) && (_goal_y == 0 || _goal_y == 15))) {
            if (_vert > 0)
                _walk_orie = 2;
            else
                _walk_orie = 8;

        } else {
            if (_hori > 0)
                _walk_orie = 6;
            else
                _walk_orie = 4;
        }
    }

    _walk_step++;
    _walk_step = _walk_step % 4;


    if (_walk_step == 0) {
        switch (_walk_orie) {
            case 2:
                _dos_y = _dos_y + 1;
                break;
            case 4:
                _dos_x = _dos_x - 1;
                break;
            case 6:
                _dos_x = _dos_x + 1;
                break;
            case 8:
                _dos_y = _dos_y - 1;
                break;
        }
    }
    drawDos(_dos_x, _dos_y);
    if (_walk_step == 0) {
        if (checkLeave(_dos_x, _dos_y)) {
            clearInterval(_walk_tick);
            _walk_tick = null;
            return;
        }

        if (_goal_x == _dos_x && _goal_y == _dos_y) {
            clearInterval(_walk_tick);
            _walk_tick = null;
            checkEvent(_dos_x, _dos_y);
            return;
        }
    }
}

function drawDos(x, y) {
    var x = getX(x) - _dos_w / 2 + C / 2;
    var y = getY(y) - _dos_h + C + 10;
    if (_walk_orie == 4 || _walk_orie == 6) {
        x += (_walk_orie - 5) * Math.floor(C / 4) * _walk_step;
    } else {
        y += (5 - _walk_orie) * Math.floor(C / 12) * _walk_step;
    }
    _ctx_2.clearRect(0, 0, W, H);
    _ctx_2.drawImage(_dos, _walk_step * _dos_w, (_walk_orie - 2) / 2 * _dos_h, _dos_w, _dos_h, x, y, _dos_w, _dos_h);
}

function canNotWalk(x, y) {
    if (x < 0 || x > 19 || y < 0 || y > 14)
        return true;
    if (y == 0) {
        if (x == 0 || x == 1)
            if (_door[0] == 0)
                return false;
        if (x == 9 || x == 10)
            if (_door[1] == 0)
                return false;
        if (x == 18 || x == 19)
            if (_door[2] == 0)
                return false;
        return true;
    }
    if (x == 0) {
        if (y == 0 || y == 1)
            if (_door[0] == 0)
                return false;
        if (y == 7 || y == 8)
            if (_door[7] == 0)
                return false;
        if (y == 13 || y == 14)
            if (_door[6] == 0)
                return false;
        return true;
    }
    if (y == 14) {
        if (x == 0 || x == 1)
            if (_door[6] == 0)
                return false;
        if (x == 9 || x == 10)
            if (_door[5] == 0)
                return false;
        if (x == 18 || x == 19)
            if (_door[4] == 0)
                return false;
        return true;
    }
    if (x == 19) {
        if (y == 0 || y == 1)
            if (_door[2] == 0)
                return false;
        if (y == 7 || y == 8)
            if (_door[3] == 0)
                return false;
        if (y == 13 || y == 14)
            if (_door[4] == 0)
                return false;
        return true;
    }
}
