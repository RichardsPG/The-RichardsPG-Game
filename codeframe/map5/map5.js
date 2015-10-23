
_map_event[4] = [64,104,164,224];

function initalMap5(){
	if(_map_event[4].indexOf(229)!=-1){
		drawImg(_door_src,9,11);
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
