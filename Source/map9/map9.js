_map_event[8] = [
    84, 144, 204,
    90, 150, 210,
    54, 94, 134, 174, 214, 254
];
var event_position = [
    {x:4, y:4, used:false, oppasite:6},
    {x:4, y:7, used:false, oppasite:8},
    {x:4, y:10, used:false, oppasite:10},
    {x:10, y:4, used:false, oppasite:9},
    {x:10, y:7, used:false, oppasite:7},
    {x:10, y:10, used:false, oppasite:11},
    {x:14, y:2, used:false, oppasite:0},
    {x:14, y:4, used:false, oppasite:4},
    {x:14, y:6, used:false, oppasite:1},
    {x:14, y:8, used:false, oppasite:3},
    {x:14, y:10, used:false, oppasite:2},
    {x:14, y:12, used:false, oppasite:5}
];
var selected_flag = false;
var previous_ckicked = {x:null, y:null};
var previousIncorrect = {x1:null, y1:null, x2:null, y2:null};

function initalMap9(){
}

function startMap9Event(x,y){
    if(selected_flag == false) {
        dismissDrawing(previousIncorrect.x1, previousIncorrect.y1);
        dismissDrawing(previousIncorrect.x2, previousIncorrect.y2);
        resetPreviousIncorrect();
        markSelected(x, y);
        setPreviousPosition(x, y);
        selected_flag = true;
    } else {
        dismissDrawing(previous_ckicked.x, previous_ckicked.y);
        if(checkMatch9(x, y)) {
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

function checkMatch9(x, y) {
    var supposeOpposite = getSupposeOpposite(x, y);
    if(supposeOpposite.x == previous_ckicked.x && supposeOpposite.y == previous_ckicked.y) {
        return true;
    }
    return false;
}

function getSupposeOpposite(x, y) {
    for(var i = 0; i < event_position.length; i++) {
        if(event_position[i].x == x && event_position[i].y == y) {
            return event_position[event_position[i].oppasite];
        }
    }
    return null;
}

function getEventObjectPositionByPosition(x, y) {
    for(var i = 0; i < event_position.length; i++) {
        if(event_position[i].x == x && event_position[i].y == y) {
            return i;
        }
    }
    return null;
}

function setPreviousPosition(x, y) {
    previous_ckicked.x = x;
    previous_ckicked.y = y;
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

function markSelected(x, y) {
    drawImg("map9/clicked.png", x, y);
}

function dismissDrawing(x, y) {
    clearCell(x, y);
}

function markCorrect(x, y) {
    drawImg("map9/correct.png", x, y);
    var i = getEventObjectPositionByPosition(x, y);
    event_position[i].used = true;
    deleteEvent(x, y);
}

function markIncorrect(x, y) {
    drawImg("map9/incorrect.png", x, y);
}

function checkGameEnd() {
    for(var i = 0; i < event_position.length; i++) {
        if(event_position[i].used == false) {
            return false;
        }
    }
    return true;
}