
_map_event[6] = [65, 125, 71, 131, 77, 137, 169];

var map7_event_position = [
    {x:5, y:3, used:false, oppasite:6, receiver:false},
    {x:5, y:6, used:false, oppasite:8, receiver:false},
    {x:11, y:3, used:false, oppasite:10, receiver:false},
    {x:11, y:6, used:false, oppasite:9, receiver:false},
    {x:17, y:3, used:false, oppasite:7, receiver:false},
    {x:17, y:6, used:false, oppasite:11, receiver:false},
    {x:9, y:8, used:true, oppasite:0, receiver:true}
];

var map7_customer = [
    {}
];

var selected_flag = false;
var map7_selected_product = {x:null, y:null};
var map7_previous_incorrect = {x:null, y:null};

function initalMap7(){
    drawImg("map7/customer_" + '1' + ".png", 5, 10);
}

function startMap7Event(x,y){
    if(selected_flag == false) {
        if(!map7ObjectIsReceiver(x, y)) {
            dismissDrawing(map7_previous_incorrect.x, map7_previous_incorrect.y);
            map7ResetIncorrect();
            map7MarkSelected(x, y);
            selected_flag = true;
        } else {
            alert('U have to pick a product first');
        }
    } else {
        if(!map7ObjectIsReceiver(x, y)) {
            map7ResetSelected(map7_selected_product.x, map7_selected_product.y);
            map7MarkSelected(x, y);
        } else {
            if(map7CheckMatch(x, y)) {
                map7MarkCorrect(map7_selected_product.x, map7_selected_product.y);
                map7MarkUsed(x, y);
                if(map7CheckEndGame()) {
                    alert('Finish');
                }
            } else {
                map7MarkIncorrect(map7_selected_product.x, map7_selected_product.y);
                map7SetIncorrect(map7_selected_product.x, map7_selected_product.y);
            }
            selected_flag = false;
            map7ResetSelected(map7_selected_product.x, map7_selected_product.y);
        }
    }
    endEvent();
}

function map7CheckMatch(x, y) {
    return false;
}

function map7ResetSelected(x, y) {
    map7_selected_product.x = null;
    map7_selected_product.y = null
    clearCell(x, y);
}



function map7MarkSelected(x, y) {
    map7_selected_product.x = x;
    map7_selected_product.y = y;
    drawImg("map7/clicked.png", x, y);
}

function map7MarkIncorrect(x, y) {
    drawImg("map7/incorrect.png", x, y);
}

function map7MarkCorrect(x, y) {
    drawImg("map7/correct.png", x, y);
}

function map7MarkUsed(x, y) {
    map7_event_position[map7GetEventObjectPositionByXY(x, y)].used = true;
    deleteEvent(x, y);
}

function map7SetIncorrect(x, y) {
    map7_previous_incorrect.x = x;
    map7_previous_incorrect.y = y;
}

function map7ResetIncorrect() {
    map7_previous_incorrect.x = null;
    map7_previous_incorrect.y = null;
}

function map7GetEventObjectPositionByXY(x, y) {
    for(var i = 0; i < map7_event_position.length; i++) {
        if(map7_event_position[i].x == x && map7_event_position[i].y == y) {
            return i;
        }
    }
    return null;
}

function map7ObjectIsReceiver(x, y) {
    return map7_event_position[map7GetEventObjectPositionByXY(x, y)].receiver;
}

function map7CheckEndGame() {
    return false;
}