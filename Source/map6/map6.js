
_map_event[5] = [42,43,44,45,46,47,48,49];

_map5_light=[
[1,0,1,1,0,1,0,1],
[0,0,1,0,0,0,1,1],
[1,1,1,1,0,0,0,0],
[0,0,0,0,1,1,1,0],
[1,0,1,1,0,0,0,0],
[0,0,0,0,1,0,1,1],
[0,1,1,0,0,1,1,1],
[0,0,1,1,1,1,0,0],
];
_map5_open=[0,0,0,0,0,0,0,0];

function initalMap6(){
}

function startMap6Event(x,y){
	x = x-2;
	for(var i=0;i<8;i++){
		_map5_open[i] = _map5_open[i]^_map5_light[x][i];
	}
	updateMap5Light();
	endEvent();
}

function updateMap5Light(){
	for(var i=0;i<8;i++){
		if(_map5_open[i]==1)
			drawImg("map6/light.png",i+2,1);
		else
			clearCell(i+2,1);
	}
}