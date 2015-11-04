
var _door_lock = [
    [1, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1],
];
var _door = [];
var _door_src = "src/square.png";

var _map_small;
var _map_small_cell = [];
var _map_name = ["???", "???", "???", "???", "???", "???", "???", "???", "???"];
var _map_name_real = ["1IT", "2Match", "3Design", "4Boss", "5Menu", "6Logic", "7EIS", "8Program", "9Comp"];
var _map_enter = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var _map_event = [];

var _map_deco = [1,1,1,0,1,1,0,1,0];


function enterMap(n) {

    _ctx_1.clearRect(0,0,W,H);
    initialMap(n);

    if(_map_deco[n-1]!=0)
        _deco.style.background = "url(\"map"+n+"/deco_"+_map_deco[n-1]+".png\")";
    else
        _deco.style.background = "";
    _map_id = n;

    updateSmallMap(n);
    updateDoor(n);
    if (_dos_x == 0 || _dos_x == 19) _dos_x = Math.abs(18 - _dos_x);
    else if (_dos_x == 1 || _dos_x == 18) _dos_x = Math.abs(19 - _dos_x);
    if (_dos_y == 0 || _dos_y == 14) _dos_y = Math.abs(13 - _dos_y);
    else if (_dos_y == 1 || _dos_y == 13) _dos_y = Math.abs(14 - _dos_y);
    drawDos(_dos_x, _dos_y);
}

function initialMap(n){
    if(n==1){
        initalMap1();
    }
    if(n==2){
        initalMap2();
    }
    if(n==3){
        initalMap3();
    }
    if(n==4){
        initalMap4();
    }
    if(n==5){
        initalMap5();
    }
    if(n==6){
        initalMap6();
    }
    if(n==7){
        initalMap7();
    }
    if(n==8){
        initalMap8();
    }
    if(n==9){
        initalMap9();
    }
}

function checkLeave(x, y) {
    var mx = 0;
    var my = 0;
    if (y == 0) {
        my = -1;
        if (x < 2) mx = -1;
        if (x > 17) mx = 1;
    } else
    if (x == 0) {
        mx = -1
        if (y < 2) my = -1;
        if (y > 12) my = 1;
    } else
    if (y == 14) {
        my = 1;
        if (x < 2) mx = -1;
        if (x > 17) mx = 1;
    } else
    if (x == 19) {
        mx = 1
        if (y < 2) my = -1;
        if (y > 12) my = 1;
    }
    if (mx != 0 || my != 0) {
        clearInterval(_walk_tick);
        _walk_tick = null;
        _map_id--;
        _map_id = (_map_id + 9 + my * 3) % 9;
        _map_id = (_map_id + mx + 3) % 3 + (_map_id - _map_id % 3);
        _map_id++;
        enterMap(_map_id);
        return true;
    }
}


function updateDoor(n) {
    for (var i = 0; i < 8; i++) {
        _door[i] = _door_lock[n - 1][i];
    }
    drawDoor();
}

function drawDoor() {

	clearDoor();

    if (_door[0] == 1) {
        drawImg(_door_src, 0, 0);
        drawImg(_door_src, 0, 1);
        drawImg(_door_src, 1, 0);
    }

    if (_door[1] == 1) {
        drawImg(_door_src, 9, 0);
        drawImg(_door_src, 10, 0);
    }

    if (_door[2] == 1) {
        drawImg(_door_src, 18, 0);
        drawImg(_door_src, 19, 0);
        drawImg(_door_src, 19, 1);
    }

    if (_door[3] == 1) {
        drawImg(_door_src, 19, 7);
        drawImg(_door_src, 19, 8);
    }

    if (_door[4] == 1) {
        drawImg(_door_src, 19, 14);
        drawImg(_door_src, 19, 13);
        drawImg(_door_src, 18, 14);
    }

    if (_door[5] == 1) {
        drawImg(_door_src, 10, 14);
        drawImg(_door_src, 9, 14);
    }

    if (_door[6] == 1) {
        drawImg(_door_src, 1, 14);
        drawImg(_door_src, 0, 14);
        drawImg(_door_src, 0, 13);
    }

    if (_door[7] == 1) {
        drawImg(_door_src, 0, 8);
        drawImg(_door_src, 0, 7);
    }
}

function clearDoor(){
	clearCell(0,0);
    clearCell(0,1);
    clearCell(1,0);
    clearCell(9,0);
    clearCell(10,0);
    clearCell(18,0);
    clearCell(19,0);
    clearCell(19,1);
    clearCell(19,7);
    clearCell(19,8);
    clearCell(19,13);
    clearCell(19,14);
    clearCell(10,14);
    clearCell(9,14);
    clearCell(1,14);
    clearCell(0,14);
    clearCell(0,13);
    clearCell(0,8);
    clearCell(0,7);
}

function updateSmallMap(n) {
    var cellID;
    _map_enter[n - 1] = 1;
    _map_name[n - 1] = _map_name_real[n - 1];
    var showID;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            cellID = i * 3 + j;

            showID = n;
            showID--;
            showID = (showID + 9 + (i - 1) * 3) % 9;
            showID = (showID + (j - 1) + 3) % 3 + (showID - showID % 3);
            showID++;

            _map_small_cell[cellID].innerHTML = _map_name[showID - 1];
            if (_map_enter[showID - 1] == 0) {
                _map_small_cell[cellID].style.background = "grey";
            } else
                _map_small_cell[cellID].style.background = "black";

        }
    }
}

function createSmallMap(){
    _map_small = document.getElementById("smallMap");
    var str;
    str = "";
    for(var i=0;i<3;i++){
        str += "<div>";
        for(var j=0;j<3;j++){
            str += "<div class=\"smallCell\" id=\"mc"+(i*3+j)+"\"></div>";
        }
        str += "</div>";
    }
    _map_small.innerHTML = str;
    for(var i=0;i<9;i++){
        _map_small_cell[i] = document.getElementById("mc"+i);
    }
}