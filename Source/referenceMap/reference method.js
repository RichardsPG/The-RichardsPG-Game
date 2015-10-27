//context of layer 1
//will not clear after event
//will clear after room change
_ctx_1

//context of layer 2
//will clar after event
//character is draw on it
_ctx_2

// decoration layer of the map
// deco_n.png in the mapx folder will be used
// 0 represent no deco
_map_deco[x-1] =n




//clear the cell on layer 1
function clearCell(x,y){}

//draw image, the left top cornor of the picture is x,y
//src: the path of the picture
function drawImg(src, x, y) {}

//return the layerX on the canvas
//x is the position of the cell
function getX(x) {}


function getY(y) {}

function addEvent(x, y) {}

function deleteEvent(x, y) {}

//call it after event
function endEvent(){}

//Stil some others.....