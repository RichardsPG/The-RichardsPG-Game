_map_event[7] = [62, 63, 65, 66, 67, 85, 86, 87, 184, 185, 203, 204,
    133, 134, 135, 153, 154, 155, 124, 144, 234, 235, 254, 255, 228, 229, 230,
    249, 250
];

var map8_kb = ["1234567890", "QWERTYUIOP",
    "ASDFGHJKL", "ZXCVBNM<"
];
var map8_pass = "";

function initalMap8() {}

function startMap8Event(x, y) {
    var temp = x + y * 20;
    if (temp == 62 || temp == 63) {
        map8Paper();
        return;
    }

    if (temp == 65 || temp == 66 || temp == 67 || temp == 85 || temp == 86 || temp == 87) {
        map8Comp();
        return;
    }
    if (temp == 184 || temp == 185 || temp == 203 || temp == 204) {
        map8Money();
        return;
    }
    if (temp == 133 || temp == 134 || temp == 135 || temp == 153 || temp == 154 || temp == 155) {
        map8Killer();
        return;
    }
    if (temp == 228 || temp == 229 || temp == 230 || temp == 249 || temp == 250) {
        map8Cola();
        return;
    }
    if (temp == 234 || temp == 235 || temp == 254 || temp == 255) {
        map8Flower();
        return;
    }
    if (temp == 124 || temp == 144) {
        map8body();
        return;
    }
}

function winMap8(){
	_door_lock[7][1] = 0;
	_door_lock[4][3] = 0;
	_map_deco[7] = 2;
	enterMap(8);
    endEvent();
}

function map8body() {
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("He use his last time pointing to the computer.", getX(5), getY(13));
    setTimeout(function() {
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    }, 100);
}

function map8Paper() {
    var temp = new Image();
    temp.src = "map8/hint_1.png";
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("I like drink Cola", getX(5), getY(13));
    temp.onload = function() {
        _ctx_2.drawImage(temp, getX(3), getY(3));
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    };

}

function map8Comp() {
    var temp = new Image();
    temp.src = "map8/hint_4.png";
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("Try the password, try to program!", getX(5), getY(-1));
    temp.onload = function() {
        _ctx_2.drawImage(temp, getX(0), getY(3));
        onmousedown = map8type;
    };
}

function map8type(e) {
    var x = e.layerX - 230;
    var y = e.layerY - 405;

    if (y % 66 > 36)
        return;
    y = Math.floor(y / 66);
    if (y > 3 || y < 0)
        return;
    x -= y * 30;
    if (x % 64 > 32)
        return;
    x = Math.floor(x / 64);

    if (x > map8_kb[y].length || x < 0)
        return;
    map8_pass = map8_pass + map8_kb[y].charAt(x);
    _ctx_2.fillStyle = "black";
    _ctx_2.font = "80px Arial";
    _ctx_2.fillText(map8_kb[y].charAt(x), 
    	175 + 120 * map8_pass.length, 340);
    if(map8_pass.length==4){

    	if(map8_pass=="OPEN"){
    		onmousedown = null;
    		winMap8();
    		return;
    	}
    	map8_pass = "";
    	setTimeout(function() {
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    }, 100);
    }
}

function map8Money() {
    var temp = new Image();
    temp.src = "map8/hint_3.png";
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("Without money I can't do anything", getX(5), getY(13));
    temp.onload = function() {
        _ctx_2.drawImage(temp, getX(4), getY(-1));
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };

    };
}

function map8Killer() {
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("People always say: The killer is ..., and die", getX(5), getY(13));
    setTimeout(function() {
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    }, 100);
}

function map8Cola() {
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("I like drink Cola, before I die.", getX(5), getY(13));
    setTimeout(function() {
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    }, 100);

}

function map8Flower() {
    var temp = new Image();
    temp.src = "map8/hint_2.png";
    _ctx_2.fillStyle = "white";
    _ctx_2.font = "24px Arial";
    _ctx_2.fillText("Some words under the flower.", getX(5), getY(13));
    temp.onload = function() {
        _ctx_2.drawImage(temp, getX(-1), getY(1));
        onmousedown = function() {
            endEvent();
            onmousedown = null;
        };
    };

}
