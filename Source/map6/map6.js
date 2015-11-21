_map_event[5] = [102, 103, 104, 105, 106, 107, 108, 109, 130, 131, 132];

var _map6_light = [
    [1, 0, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 0, 0],
];
var _map6_open = [0, 0, 0, 0, 0, 0, 0, 0];
var _map6_20 = null;
var _map6_now = 0;
var _map6_li = 0;

function initalMap6() {
    updateMap6Light();
    if (_map_deco[7] == 1) {
        addTB("clear");
        addTB("Upper side is a game of open the light.Each switch controls \
        	several lights to open all the lights.");
        addTB("For example, Button 1 controls Light 1 3 4 5 7.");
        addTB("You have 30 seconds. Open as more light as possible.");
        addTB("By the way, I lock the door just now~");
    } else if (_map_deco[7] == 2) {
        addTB("clear");
        addTB("If you have not open all the lights yet, now you have unlimited \
    		time to try. However, you will not get scores.");
        addTB("Now you can go to next Room. Open light is a logic game, \
    		something related to maths. You don't have to master such a \
    		methemetic game if you choose us, lol.");
        addTB("Students may have question:'You have 3 streams, what is the \
    		difference? Now there are 3 rooms represents each of them. Pass \
    		any one of them you can go for boss. If you want to try the \
    		other 2 rooms, go through this room~");
        addTB("If you choose us, master nay one of the 3 stream means you \
    		are succeed~");
    }
}

function Map6_20() {
    var temp = 0;

    _ctx_1.clearRect(getX(2), getY(4), 12 * C, C / 2);
    _ctx_1.fillRect(getX(2), getY(4), (30 - _map6_now) / 2.5 * C, C / 2);


    for (var i = 0; i < 8; i++) {
        temp += _map6_open[i]
    }
    _map6_now++;
    if (_map6_now == 30 || temp == 8) {
        _map6_li = temp;
        updateScore();
        map6Win();
    }
}

function map6Win() {
    _map_deco[5] = 2;
    clearInterval(_map6_20);
    _door_lock[5][7] = 0;
    _door_lock[5][2] = 0;
    _door_lock[5][4] = 0;
    _door_lock[5][5] = 0;
    enterMap(6);
}

function startMap6Event(x, y) {
    if (x - 2 > 7) {
        for (var i = 0; i < 8; i++) {
            _map6_open[i] = 0;
        }
        updateMap6Light();
        endEvent();
    }
    if (_map_deco[5] == 1 && _map6_20 == null) {
        _map6_20 = setInterval(Map6_20, 1000);
    }
    x = x - 2;

    for (var i = 0; i < 8; i++) {
        _map6_open[i] = _map6_open[i] ^ _map6_light[x][i];
    }
    updateMap6Light();
    endEvent();
}

function updateMap6Light() {
    for (var i = 0; i < 8; i++) {
        if (_map6_open[i] == 1)
            drawImg("map6/light.png", i + 2, 2);
        else
            clearCell(i + 2, 2);
    }
}
