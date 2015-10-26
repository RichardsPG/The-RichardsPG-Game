var _event = false;
var _click = new Image();
_click.src = "src/click.png";


function startEvent() {
    _memo_x = _dos_x;
    _memo_y = _dos_y;
    _memo_ori = _walk_orie;
    _memo_mapID = _map_id;
    _layer_2.onmousedown = null;
    _last_event = false;
    _event = false;

    if (_map_id == 1) {
        startMap1Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 2) {
        startMap2Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 3) {
        startMap3Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 4) {
        startMap4Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 5) {
        startMap5Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 6) {
        startMap6Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 7) {
        startMap7Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 8) {
        startMap8Event(_dos_x, _dos_y);
        return;
    }
    if (_map_id == 9) {
        startMap9Event(_dos_x, _dos_y);
        return;
    }
}

function endEvent() {


    _map_id = _memo_mapID;
    updateDoor(_map_id);

    _dos_x = _memo_x;
    _dos_y = _memo_y;
    _walk_ori = _memo_ori;
    _layer_2.onmousedown = moveDos;

    drawDos(_dos_x, _dos_y);
    checkEvent(_dos_x, _dos_y);
}

function checkEvent(x, y) {
    if (_map_event[_map_id - 1].indexOf(y * 20 + x) == -1)
        return;
    _event = true;
    drawEvent(x, y);
}

function drawEvent(x, y) {
    //_ctx_2.fillStyle = "yellow";
    //_ctx_2.font = "30px Verdana";
    //_ctx_2.fillText("Click!?", getX(x) - C / 2, getY(y) + 30 - 2 * C);
    _ctx_2.drawImage(_click, getX(x) - C, getY(y) - 2 * C);

}