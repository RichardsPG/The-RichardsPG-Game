_map_event[0] = [194, 214, 234, 254, 156, 157];

var map1_v = [0, 0, 0, 0];
var map1_s = 1;
var map1_time;
var map1_mode = 0;
var map1_now = 0;

function initalMap1() {
	if(map1_mode==200){
		return;
	}
	if(map1_v[0]!=0)	
		drawImg("map1/square.png", 14, 4+8);
	if(map1_v[1]!=0)	
		drawImg("map1/square.png", 14, 3+8);
	if(map1_v[2]!=0)	
		drawImg("map1/square.png", 14, 1+8);
	if(map1_v[3]!=0)	
		drawImg("map1/square.png", 14, 2+8);
	
    map8Update();

}

function startMap1Event(x, y) {
    if (x + y * 20 == 156 || x + y * 20 == 157) {
        addEvent(14, 9);
        addEvent(14, 10);
        addEvent(14, 11);
        addEvent(14, 12);
        map1_v = [0, 0, 0, 0];
        map1_s = 1;
        _ctx_1.clearRect(getX(1),getY(1),19*C,12*C);
        map8Update();
        endEvent();
        return;
    }


    drawImg("map1/square.png", 14, y);
    deleteEvent(x, y);
    y -= 9;

    if (y == 0)
        y = 2;
    else if (y == 1)
        y = 3;
    else if (y == 2)
        y = 1;
    else
        y = 0;

    map1_s = y + 2;
    map1_v[y] = 1;
    map1_now = y + 1;

    _ctx_1.clearRect(getX(8), getY(1), 11 * C, 2 * C);
    _ctx_1.fillStyle = "white";
    _ctx_1.font = "20px Arial";
    _ctx_1.fillText("Loading...", getX(9), getY(2));

    map1_mode = 0;
    map1_time = setInterval(map1_tick, 1500);
}

function Map1win(){
	_ctx_1.clearRect(getX(8), getY(1), 11 * C, 2 * C);
    _map_deco[0] = 2;
	clearInterval(map1_time);
	deleteEvent(14, 9);
    deleteEvent(14, 10);
    deleteEvent(14, 11);
    deleteEvent(14, 12);
    deleteEvent(16, 7);
    deleteEvent(17, 7);

	_door_lock[0][4] = 0;
	_door_lock[4][0] = 0;
	enterMap(1);
    endEvent();
}

function map1_tick() {
	if(map1_mode == 200){
		Map1win();
		return;

	}
	if(map1_mode ==400){
        clearInterval(map1_time);
        map1_s = 15;
        _ctx_1.clearRect(getX(8), getY(1), 11 * C, 2 * C);
	    _ctx_1.fillStyle = "white";
	    _ctx_1.font = "20px Arial";
	    _ctx_1.fillText(map1str(), getX(9), getY(2));
        endEvent();
	}
    
    map8Update();
    while (true) {
    	map1_mode++;
        if (map1_mode == 4 || map1_mode == map1_now) {
            map1_mode = 10;
            continue;
        }
        if (map1_mode == 1) {
            if (map1_v[0] == 1) {
                map1_v[0] = 2;
                map1_s = 6;
                return;
            } else if (map1_v[0] == 3) {
                map1_v[0] = 4;
                map1_s = 7;
                return;
            }
            continue;;
        }
        if (map1_mode == 2) {
            if (map1_v[1] == 1) {
                map1_v[1] = 2;
                map1_s = 8;
                return;
            }
            continue;
        }
        if (map1_mode == 3) {
            if (map1_v[2] == 2) {
                map1_v[2] = 3;
                map1_s = 9;
                return;
            }
            continue;
        }

        if (map1_v[0] == 2 && map1_v[1] == 3) {
            map1_v[0] = 3;
            map1_s = 10;
            return;
        }
        if (map1_v[1] == 2 && map1_v[2] >= 2) {
            map1_v[1] = 3;
            map1_s = 11;
            return;
        }
        if (map1_v[2] == 1 && map1_v[1] >= 2) {
            map1_v[2] = 2;
            map1_s = 12;
            return;
        }
        if (map1_v[3] == 1 && map1_v[2] >= 2) {
            map1_v[3] = 2;
            map1_s = 13;
            return;
        }
        if (map1_v[3] == 2 && map1_v[2] >= 3) {
            map1_v[3] = 3;
            map1_s = 14;
            return;
        }
        if(map1_v[0]+map1_v[1]+map1_v[2]+map1_v[3]==13){
        	map1_mode = 200;
        	return;
        }
        if(map1_v[0]*map1_v[1]*map1_v[2]*map1_v[3]!=0){
        	map1_mode = 400;
        	return;
        }
        clearInterval(map1_time);
        endEvent();
        break
    }

}

function map8Update() {
    if (map1_v[0] != 0) {
        drawImg("map1/a_" + map1_v[0] + ".png", 2, 2);
    }
    if (map1_v[1] != 0) {
        drawImg("map1/g_" + map1_v[1] + ".png", 2, 8);
    }
    if (map1_v[2] != 0) {
        drawImg("map1/r_" + map1_v[2] + ".png", 8, 7);
    }
    if (map1_v[3] != 0) {
        drawImg("map1/b_" + map1_v[3] + ".png", 8, 3);
    }
    _ctx_1.clearRect(getX(8), getY(1), 11 * C, 2 * C);
    _ctx_1.fillStyle = "white";
    _ctx_1.font = "20px Arial";
    _ctx_1.fillText(map1str(), getX(9), getY(2));

}

function map1str() {
    var str;
    switch (map1_s) {
        case 1:
            str = "try the four item in different sequence";
            break;
        case 2:
            str = "Oh, actually you are an apple";
            break;
        case 3:
            str = "emmm... behind a door";
            break;
        case 4:
            str = "Throught the white circle";
            break;
        case 5:
            str = "My name is Friedrich Wilhelm.";
            break;
        case 6:
            str = "OMG! OMG! You losing your color!!?";
            break;
        case 7:
            str = "You seems more and more expensive;)";
            break;
        case 8:
            str = "The door is a network gate.";
            break;
        case 9:
            str = "I find you! Google~";
            break;
        case 10:
            str = "You used to be an apple, so as you now.";
            break;
        case 11:
            str = "The network gate level up~";
            break;
        case 12:
            str = "You find the route from your gate.";
            break;
        case 13:
            str = "Still remember me? I am Nietzsche.";
            break;
        case 14:
            str = "Now you know who am I? lol~";
            break;
        case 15:
            str = "Retry with another sequence~";
            break;


    }
    return str;
}
