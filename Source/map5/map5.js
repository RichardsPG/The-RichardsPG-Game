
_map_event[4] = [];

function initalMap5(){
    if(_map_deco[4]==1){
        addTB("clear");
        addTB("Good Morning, You may have no idea why you are here. \
            Don't worry, just try the game ahead, it is not hard.");
        addTB("Oh, by the way. Remember, please, the choice you made \
            in the early game realy affect later stage.")
    }
    if(_map_deco[4]==2){
        addTB("clear");
        addTB("Welcome back. Do you still remember the room? It is the \
         room you begin the game.");
        addTB("You can go through match game to exprience another ganme. \
            Or you can goto choice room for next stage");
        addTB("To tell you the truth. Computer Science means study com\
            puters, means write program, means learning using software. \
            you can focus part of them or try to learn all of them. \
            Computer Science student can also be different style.");
    }
    if(_map_deco[4]==3){
        addTB("clear");
        addTB("You have already passed one of the stream. No you can \
            fight Boss.");
        addTB("If you are interested in the other rooms, you can try \
            them now. Caution, once you begin finghting boss, the game \
            comes to its end. No matter you kill the Boss or killed by \
            the boss. LOL.");
    }
}

function startMap5Event(x,y){
    var pos = y*20+x;
    if(pos==64){
    	map5_event_64();
    	return;
    }
    if(pos==104){
    	map5_event_104();
    	return;
    }

	if(pos==164){
    	map5_event_164();
    	return;
    }
    if(pos==224){
    	map5_event_224();
    	return;
    }
    if(pos==229){
    	map5_event_229();
    	return;
    }
}

function map5_event_64(){
	drawImg("map5/example.jpg",10,2);
	endEvent();
}

function map5_event_104(){
	clearCell(11,5);
	endEvent();
}

function map5_event_164(){	
	drawImg(_door_src,9,11);
	addEvent(9,11);
	endEvent();
}

function map5_event_224(){
	clearCell(9,11)
	deleteEvent(9,11);
	endEvent();
}

function map5_event_229(){
	_ctx_1.fillStyle = "white"
	_ctx_1.font = "30px Verdana";
	_ctx_1.fillText("_ctx_1's content will remain after event",20,30);

	_ctx_2.fillStyle = "yellow";
    _ctx_2.fillText("_ctx_2's content will disappear after endEvent()", 20, 70);

    alert("then endEvent()");

	endEvent();
}
