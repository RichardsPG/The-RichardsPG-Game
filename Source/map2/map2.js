_map_event[1] = [163, 164, 165, 166,
    183, 184, 185, 186,
    203, 204, 205, 206,
    223, 224, 225, 226
];

var _map2_pair = [1, 1, 2, 6, 8, 7, 2, 6, 5, 3, 4, 5, 7, 4, 3, 8];
var _map2_card1 = -1;
var _map2_card2 = -1;
var _map2_turn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var _map2_pic = -1;
var _map2_rec = 0;

function initalMap2() {
    if (_map_deco[1] == 1) {
        for (var n = 0; n < 16; n++) {
            if (_map2_turn[n] == 1) {
                drawImg("map2/card_" + _map2_pair[n] + ".png", n % 4 + 3, Math.floor(n / 4) + 8);
            }
        }
        if (_map2_pic != -1) {
            drawImg("map2/news_" + _map2_pair[_map2_pic] + ".png", 11, 2);
        }
    }
    if(_map_deco[1]==1){
        addTB("clear");
        addTB("You must have seen the circles. Be relax, now is still time for you \
            to get familiar with the game.");
        addTB("Interact with this circles, it is just a pair game. When you \
            interact with a circle, some color will shown. Tow same color \
            will get paired. Pair all the circles to unclock next 2 rooms.")
    }else if(_map_deco[1]==2){
        addTB("clear");
        addTB("Very easy game, isn't it? I admit.");
        addTB("Some students ask what they will learn in our department. Actually \
            we will learn how to programming and how to design a software");
        addTB("Oh! By the way, found the news on the right side? I mean, computer \
            is a professional discipline.");
        addTB("By the by the way, do you still remember that...choice is very \
            important, the flap of a butterfly's wings in Brazil sett off a tornado \
            in Texas.");
    }
}

function startMap2Event(x, y) {
	//winMap2();
    //    return;
    if (_map2_card1 != -1 && _map2_card2 != -1) {
        if (_map2_pair[_map2_card1] != _map2_pair[_map2_card2]) {
            turnbackCard(_map2_card1);
            turnbackCard(_map2_card2);
        }
        _map2_card1 = -1;
        _map2_card2 = -1;
    }

    if (_map2_card1 == -1) {
        _map2_card1 = (x - 3) + (y - 8) * 4;
        turnoverCard(_map2_card1);
    } else {
        _map2_card2 = (x - 3) + (y - 8) * 4;
        turnoverCard(_map2_card2);
    }

    var i;
    var j = 0;
    for (i = 0; i < 16; i++) {
        if (_map2_turn[i] != 0)
            j++;
    }
    _map2_rec = j * 7;
    updateScore();


    if (j == 16) {
        winMap2();
        return;
    }

    updateCard();
    endEvent();
}

function turnbackCard(n) {
    //clearCell(n % 4 + 3, Math.floor(n / 4) + 8);
    addEvent(n % 4 + 3, Math.floor(n / 4) + 8);
    _map2_turn[n] = 0;
}

function turnoverCard(n) {
    //drawImg("map2/card_" + _map2_pair[n] + ".png", n % 4 + 3, Math.floor(n / 4) + 8);
    //drawImg("map2/news_" + _map2_pair[n] + ".png", 11, 2);
    _map2_pic = n;
    deleteEvent(n % 4 + 3, Math.floor(n / 4) + 8);
    _map2_turn[n] = 1;
}

function updateCard() {
    for (var n = 0; n < 16; n++) {
        if (_map2_turn[n] == 1) {
            drawImg("map2/card_" + _map2_pair[n] + ".png", n % 4 + 3, Math.floor(n / 4) + 8);
        } else {
            clearCell(n % 4 + 3, Math.floor(n / 4) + 8);
        }
    }
    if (_map2_pic != -1) {
        drawImg("map2/news_" + _map2_pair[_map2_pic] + ".png", 11, 2);
    }
}

function winMap2() {
    _map_event[1] = [];
    _last_event = true;
    _map_deco[1] = 2;
    _map_deco[4] = 2;
    _door_lock[1][1] = 0;
    _door_lock[1][3] = 0;
    enterMap(2);
    endEvent();
}
