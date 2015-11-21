
_map_event[6] = [65, 125, 71, 131, 77, 137, 169];

var map7_event_position = [
    {x:5, y:3, used:false, customer:3, receiver:false},
    {x:5, y:6, used:false, customer:5, receiver:false},
    {x:11, y:3, used:false, customer:2, receiver:false},
    {x:11, y:6, used:false, customer:1, receiver:false},
    {x:17, y:3, used:false, customer:0, receiver:false},
    {x:17, y:6, used:false, customer:4, receiver:false},
    {x:9, y:8, used:true, customer:-1, receiver:true}
];

var selected_flag = false;
var map7_selected_product = {x:null, y:null};
var map7_previous_incorrect = {x:null, y:null};
var currentCustomer = -1;
var _map7_rec = 0;

function initalMap7(){
    updateCustomer();
    addTB("clear");
    addTB('OMG!!! There are lots of people here. It seems they are looking for something.');
    addTB('Match the customers with the products they need.');
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
            map7ResetSelected();
            map7MarkSelected(x, y);
        } else {
            if(map7CheckMatch()) {
                _map7_rec += 5;
                updateScore();
                map7MarkCorrect(map7_selected_product.x, map7_selected_product.y);
                map7MarkUsed(map7_selected_product.x, map7_selected_product.y);
                updateCustomer();
                clearCell(map7_selected_product.x, map7_selected_product.y);
                if(map7CheckEndGame()) {
                    deleteEvent(x, y);
                    _door_lock[6][0] = 0;
                    _door_lock[6][2] = 0;
                    _door_lock[4][6] = 0;
                    _door_lock[4][7] = 0;
                    _map_deco[4] = 3;
                    addTB("clear");
                    addTB('Finally! Those customers had gone.');
                    addTB('Computing is so much more than just programming.  Being a computing student, you have to understand the needs of the customers.');
                    addTB('Go!  Go to the next room.')
                }
            } else {
                _map7_rec -= 5;
                updateScore();
                map7MarkIncorrect(map7_selected_product.x, map7_selected_product.y);
                map7SetIncorrect(map7_selected_product.x, map7_selected_product.y);
            }
            selected_flag = false;
            map7ResetSelected();
        }
    }
    endEvent();
}

function updateCustomer() {
    currentCustomer++;
    for(var i = 5; i < 15; i++) {
        for(var j = 10; j < 14; j++) {
            clearCell(i, j);
        }
    }
    drawImg("map7/customer_" + currentCustomer + ".png", 5, 10);
}

function map7CheckMatch() {
    if(map7_event_position[map7GetEventObjectPositionByXY(map7_selected_product.x, map7_selected_product.y)].customer == currentCustomer) {
        return true;
    }
    return false;
}

function map7ResetSelected() {
    map7_selected_product.x = null;
    map7_selected_product.y = null
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
    for(var i = 0; i < map7_event_position.length; i++) {
        if(!map7_event_position[i].used) {
            return false;
        }
    }
    return true;
}