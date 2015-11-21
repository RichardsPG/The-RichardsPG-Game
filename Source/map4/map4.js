
_map_event[3] = [148];
var map4talk = null;
var map4Str = [[],[],[]];
var m4n = 0;
var m4s = 0;

function gameOver(){
	_layer_2.onmousedown = null;
	clearInterval(_timer);
	addTB("clear");
    addTB("Thank you for playing the game. This the end \
    	of the game. If you have interest in our department \
    	this is the link. <a href='http://www.comp.polyu.edu.hk/' \
    	target = 'blank'>Click Me~</a>");
}

function initalMap4(){
	if(map4talk==null){
		map4talk = new Image();
		map4talk.src = "map4/talk.png";
		map4StrIni();
	}
	 if(_map_deco[7]==1){
        addTB("clear");
        addTB("If you have prepared to fight boss, just go\
        	ahead. Caution, once you begin fighting the boss \
        	the game come the end. You can not go back to other \
        	rooms unless you restart this game.");
        addTB("Engjoy the time with boss~");
    }
}

function startMap4Event(x,y){
	_map_deco[3] = 2;
	for(var i=0;i<8;i++){
		_door_lock[3][i] = 0;
	}
	
	enterMap(4);
	

	setTimeout(function(){
		_layer_2.onmousedown = map4Next;

	},100);
	_ctx_1.clearRect(0,0,W,H);
	_ctx_2.clearRect(0,0,W,H);
	map4Next();
}

function map4Next(){
	var f = map4Str[0][m4n];
	var w = map4Str[1][m4n];
	var s = map4Str[2][m4n];
	if(f<=5){
		map4Speak(f,w,s);
	}else if(f==6){
		map4Choice(w,s)
	}
	m4n++;
	if(m4n==map4Str[0].length){
		gameOver();
		
	}
	
}

function map4Choice(c1,c2){
	_ctx_2.fillStyle = "#e5e5e5";
	_ctx_2.fillRect(getX(8),getY(5),5*C,C);
	_ctx_2.fillRect(getX(8),getY(7),5*C,C);
	_ctx_2.fillStyle = "black";
	_ctx_2.fillText(c1,getX(8.5),getY(5.6));
	_ctx_2.fillText(c2,getX(8.5),getY(7.6));
	_layer_2.onmousedown = map4Deci;
}

function map4Deci(e){

	if(e.layerY<getY(6)){
		var f = map4Str[0][m4n];
		var w = map4Str[1][m4n];
		var s = map4Str[2][m4n];
		m4s += f;
		map4Speak(w,0,s);
		m4n+=2;
	}else if(e.layerY<getY(9)){
		m4n++;
		var f = map4Str[0][m4n];
		var w = map4Str[1][m4n];
		var s = map4Str[2][m4n];
		m4s += f;
		map4Speak(w,0,s);
		m4n++;
	}else{
		return;
	}
	updateScore();
	_layer_2.onmousedown = map4Next;
}


function map4Speak(n,w,str){
	if(w==0){
		_ctx_1.clearRect(0,getY(0),W,H);
		drawImg("map4/face ("+n+").png",6,3);
	}
	_ctx_2.clearRect(0,getY(0),W,H);
	_ctx_2.drawImage(map4talk,getX(0),getY(10));
	_ctx_2.fillStyle = "black";
    _ctx_2.font = "24px Arial";
    if(w==0)
	    _ctx_2.fillText("【Dos】",getX(2), getY(12));
	else
		_ctx_2.fillText("【You】",getX(2), getY(12));
	_ctx_2.fillText(str,getX(2), getY(13));

}



function dosTalk(n,str){
	map4Str[0].push(n);
	map4Str[1].push(0);
	map4Str[2].push(str);
}

function youTalk(str){
	map4Str[0].push(5);
	map4Str[1].push(1);
	map4Str[2].push(str);
}

function map4Mark(m1,n1,s1){
	map4Str[0].push(m1);
	map4Str[1].push(n1);
	map4Str[2].push(s1);
}

function youChose(c1,c2,m1,m2){
	map4Str[0].push(6);
	map4Str[1].push(c1);
	map4Str[2].push(c2);
}

function map4StrIni(){
	dosTalk(2,"Hello, I am Dos. Nice to meet you~");
	youTalk("Who are you?");
	dosTalk(1,"Iam the character you control~");
	dosTalk(2,"So...this level is to play a game with me.");
	dosTalk(2,"In this game, make me happy you will get more marks.");
	youTalk("Wait! Wait! I mean... I am fighting boss here.");
	dosTalk(3,"Oh year. I am the boss.");
	dosTalk(3,"You should make your boss happy, shouldn't you?");
	youTalk("Oh! I am very disappointed.");
	youTalk("So what is the rule?");
	dosTalk(2,"I will talk you, you know, gal games.");
	dosTalk(2,"I will ask you some questions");
	dosTalk(3,"If you choose the proper answer, you will get marks");
	youTalk("Proper answer?");
	dosTalk(1,"Yes, the answer makes me happy.");
	dosTalk(1,"Maybe not the right answer~");
	youTalk("Ok...Ok, I understand.");
	dosTalk(2,"Let me give you an example first.");
	youChose("Yes,please~","No, no!");
	map4Mark(3,2,"Oh ,it seems that you have master the rule!");
	map4Mark(0,4,"If you choose the other, I will give you some marks.");
	dosTalk(2,"Then, let's begin the game!");

	dosTalk(2,"Hi, Apple! It is very nice to meet you here!");
	youChose("I'm Peter","Me too");
	map4Mark(0,3,"Sorry...since your name is very hard to remember.");
	map4Mark(2,2,"You seems good~");
	dosTalk(2,"What is our plan tody?");
	youTalk("Maybe we can go for some dinner.");
	dosTalk(2,"Oh, very good idea~");
	youTalk("So, what do you want to eat?");
	dosTalk(2,"em....have no idea, depend on you~");
	youTalk("So, let's eat some junk food like KFC?");
	dosTalk(3,"Oh!NO!It will make me fat!");
	youTalk("How about japanese noodles?");
	dosTalk(3,"So expensive...");
	youTalk("How about beef?");
	dosTalk(4,"I heart beef is bad for my health.");
	youTalk("....");
	dosTalk(2,"Em?");
	youChose("Silence","Angry");
	map4Mark(0,1,"OH....OK");

	map4Mark(-1,4,"I know I am a litte little wrong...");
	dosTalk(2,"Just eat beef.");
	youTalk("Ok, depend on you.");
	dosTalk(2,"It seems that you have some mind?");
	youTalk("Yean...about the university.");
	dosTalk(1,"Oh...yean, university. Which university you will choose?");
	youTalk("No idea yet.");
	dosTalk(2,"Do you want me to give you some advise?");
	youTalk("Please go ahead.");
	dosTalk(2,"I know, sometimes you choose a university no beacause");
	dosTalk(2,"you like the university, but some other reasons.");
	youTalk("Agree to some extent.");
	dosTalk(2,"Talk about what you will learn in our university?");
	youTalk("Just go head to your department.");
	dosTalk(2,"You seems so clever. Let me give you some marks. Choose A.");
	dosTalk(2,"Get some marks yourself~");
	youChose("A","B");
	map4Mark(2,2,"Enjoy the mark~");
	map4Mark(0,4,"It seems that you not focus on our talk.");

	dosTalk(2,"First, we are a computing science subject.");
	youTalk("What will learn if I chooce you?");
	dosTalk(2,"Desgin softwares, which includes games.");
	dosTalk(2,"Such as LOL, Angry bird, we will go and teach you");
	dosTalk(2,"how to make them.");
	youTalk("Ohther than game?");
	dosTalk(2,"Any software you can image. Ofiice, Calculator...");
	youTalk("Can I just say that: you guys are studying computer.");
	dosTalk(2,"You can answer the question yourself~?");
	youTalk("Through our game, whether comupter science means");
	youTalk("studying computer?");
	youChose("No","Yes");
	map4Mark(0,1,"Wrong answer");
	map4Mark(3,3,"Good job.");
	dosTalk(3,"We study computer, but not only computer");

	dosTalk(2,"Have you play the open light game?");
	youTalk("Yes,it seems complex.");
	dosTalk(1,"You know, even you can not open all the lights,");
	dosTalk(1,"you can go to next level.");
	dosTalk(1,"This is a math game. It need some calculation.");
	dosTalk(2,"Now all of us need master mathmatic problem.");
	youTalk("You mean, if my maths is bad, there is no problem");
	youTalk("to choose your department.");
	dosTalk(3,"Yes. To tell you the truth...one author of the game,");
	dosTalk(3,"her math is very bad. So your mark always looks strange.");

	youTalk("Bad math can still write game?");
	dosTalk(3,"Of course, depend on the game content~");
	dosTalk(3,"The difficulty is depend on you intest.");
	youTalk("It can be easy...so you mean it is not a professional discipline?");
	dosTalk(4,"a....?");
	youChose("I'm wrong","......");
	map4Mark(2,2,"Yean, you are wrong.");
	map4Mark(0,4,"You are wrong.");
	dosTalk(2,"We are a very professional discipline.");
	dosTalk(2,"Haven't see what our department achieve in the match game?");
	youChose("Neglected","Yes, I am.");
	map4Mark(0,4,"What a shame!");
	map4Mark(2,2,"It is very great, isn't it?");

	dosTalk(2,"So, do you have interes in our department.");
	youTalk("If it is a markable question, I will answer yes.");
	dosTalk(1,"Ok, Ok, relax, pleanse.");
	youTalk("Actually, I'm worried about programming.");
	youTalk("It may be hard, boring...");
	dosTalk(1,"Sometimes, it is, I have to admit.");
	dosTalk(2,"Play the programming room?");

	if(_map8_rec == 0)
		youTalk("Not finished");
	else
		youTalk("yes, I have open the door");
	dosTalk(3,"In the room, you will find a lot bodies.");
	dosTalk(3,"Seems horrible...like first impression of programming");
	dosTalk(2,"If you have talk to the bodies, you may found it is actually");
	dosTalk(2,"leaves some interesting words.");
	dosTalk(2,"If you want to try programming, you will find it is interesting.");
	dosTalk(2,"Sometimes you need give yourself a change to try.");
	youTalk("It means I should master some programming languages.");
	dosTalk(2,"Yes. Usually people found they are interesting before");
	dosTalk(2,"they master is.");

	youTalk("If I really not intested in programming.");
	dosTalk(4,"That will be a big shame.");
	dosTalk(2,"But you can still choose us.");
	dosTalk(2,"You can design a software without making it yourself.");
	dosTalk(2,"Good idea and mind is also important.");

	youTalk("OK...Let me think....");
	dosTalk(2,"We have already talked so much...so...");
	dosTalk(2,"Do you think the game is interesting?(not markable)");
	youChose("Yes","No");
	map4Mark(0,1,"Thank you");
	map4Mark(0,3,"We'll try to improve.");

	dosTalk(2,"Do you have some surprise in this game?(not markable)");
	youChose("Yes","No");
	map4Mark(0,1,"Thank you");
	map4Mark(0,3,"We'll try to improve.");

	dosTalk(2,"Have more idea about department of computing?(not markable)");
	youChose("Yes","No");
	map4Mark(0,1,"Thank you");
	map4Mark(0,3,"We'll try to improve.");

	dosTalk(2,"Will you choose our department?");
	youChose("Yes","No");
	map4Mark(3,1,"Thank you very much~");
	map4Mark(0,3,"I'm almost crying...");


	dosTalk(2,"Thank you for playing.");
	dosTalk(2,"This is the end of this game.");
}