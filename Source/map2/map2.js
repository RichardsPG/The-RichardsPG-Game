
_map_event[1] = [163,164,165,166,167,
183,184,185,186,187,
203,204,205,206,207,
223,224,225,226,227,];

var _map2_pair = [1,1,2,6,8,7,2,6,5,3,4,5,7,4,3,8];
var _map2_card1 = -1;
var _map2_card2 = -1;
var _map2_turn = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function initalMap2(){
}

function startMap2Event(x,y){
	if(_map2_card1!=-1&&_map2_card2!=-1){
		if(_map2_pair[_map2_card1]!=_map2_pair[_map2_card2]){
			turnbackCard(_map2_card1);
			turnbackCard(_map2_card2);
		}
		_map2_card1 = -1;
		_map2_card2 = -1;
	}
	for(i=0;i<16;i++){
		if(_map2_turn[i]==0)
			break;
	}
	if(i==16){
		alert(12);
		winMap2();
		return;
	}
	if(_map2_card1 ==-1){
		_map2_card1 = (x-3)+(y-8)*4;
		turnoverCard(_map2_card1);
	}else{
		_map2_card2 = (x-3)+(y-8)*4;
		turnoverCard(_map2_card2);
	}
	endEvent();
}

function turnbackCard(n){
	clearCell(n%4+3,Math.floor(n/4)+8);
	_map2_turn[n] = 0;
}

function turnoverCard(n){
	drawImg("map2/card_"+_map2_pair[n]+".png",n%4+3,Math.floor(n/4)+8);
	_map2_turn[n] = 1;
}

function winMap2(){
	_map_deco[1] =2;
	enterMap(2);
	endEvent();
}