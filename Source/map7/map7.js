
_map_event[6] = [65, 125, 71, 131, 77, 137, 169];

var event_position = [
    {x:5, y:3, used:false, oppasite:6, receiver:false},
    {x:5, y:6, used:false, oppasite:8, receiver:false},
    {x:11, y:3, used:false, oppasite:10, receiver:false},
    {x:11, y:6, used:false, oppasite:9, receiver:false},
    {x:17, y:3, used:false, oppasite:7, receiver:false},
    {x:17, y:6, used:false, oppasite:11, receiver:false},
    {x:9, y:8, used:false, oppasite:0, receiver:true}
];

var selected_flag = false;
var previous_ckicked = {x:null, y:null};
var previousIncorrect = {x1:null, y1:null, x2:null, y2:null};

function initalMap7(){
}

function startMap7Event(x,y){
    if(selected_flag == false) {
        dismissDrawing(previousIncorrect.x1, previousIncorrect.y1);
        dismissDrawing(previousIncorrect.x2, previousIncorrect.y2);
        resetPreviousIncorrect();
        markSelected(x, y);
        setPreviousPosition(x, y);
        selected_flag = true;
    } else {
        dismissDrawing(previous_ckicked.x, previous_ckicked.y);
        if(checkMatch7(x, y)) {
            markCorrect(x, y);
            markCorrect(previous_ckicked.x, previous_ckicked.y);
            if(checkGameEnd()) {
                alert('Finished');
            }
        } else {
            markIncorrect(x, y);
            markIncorrect(previous_ckicked.x, previous_ckicked.y);
            setPreviousIncorrect(x, y, previous_ckicked.x, previous_ckicked.y);
        }
        selected_flag = false;
        resetPreviousPosition();
    }
    endEvent();
}

function checkMatch7(x, y) {
    return false;
    /*var supposeOpposite = getSupposeOpposite(x, y);
    if(supposeOpposite.x == previous_ckicked.x && supposeOpposite.y == previous_ckicked.y) {
        return true;
    }
    return false;*/
}

function getSupposeOpposite(x, y) {
    for(var i = 0; i < event_position.length; i++) {
        if(event_position[i].x == x && event_position[i].y == y) {
            return event_position[event_position[i].oppasite];
        }
    }
    return null;
}

function markSelected(x, y) {
    drawImg("map9/clicked.png", x, y);
}

function markIncorrect(x, y) {
    drawImg("map9/incorrect.png", x, y);
}

function dismissDrawing(x, y) {
    clearCell(x, y);
}

function resetPreviousPosition() {
    previous_ckicked.x = null;
    previous_ckicked.y = null;
}

function setPreviousIncorrect(x1, y1, x2, y2) {
    previousIncorrect.x1 = x1;
    previousIncorrect.x2 = x2;
    previousIncorrect.y1 = y1;
    previousIncorrect.y2 = y2;
}

function resetPreviousIncorrect() {
    previousIncorrect.x1 = null;
    previousIncorrect.x2 = null;
    previousIncorrect.y1 = null;
    previousIncorrect.y2 = null;
}