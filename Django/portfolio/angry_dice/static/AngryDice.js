window.onload = function() {
};
var diceOne = new CreateDice();
var diceTwo = new CreateDice();
var stage = 0;

var el = document.getElementById('Save_die_one');
  el.addEventListener('click', function(){
     if(el.value==="OFF"){
         el.value="ON";
         SaveDie(diceOne);
     } else if(el.value==="ON"){
         diceOne.held = false;
         el.value="OFF";}
  }, false);

var elem = document.getElementById('Save_die_two');
  elem.addEventListener('click', function(){
     if(el.value==="OFF"){
         el.value="ON";
         SaveDie(diceTwo);
     } else if(el.value==="ON"){
         diceTwo.held = false;
         el.value="OFF";}
  }, false);

var ellie  = document.getElementById('ROLL');
  // ellie.addEventListener('click', function(){
  //   gameStages(diceOne, diceTwo);
  // }, false);
  ellie.addEventListener('click', function(){
    newRoll(diceOne, diceTwo);
  }, false);

var dice = ["1.png", "2.png", "angry.png", "4.png", "5.png", "6.png"]

function CreateDice() {
  this.numShowing = function(){
    rolledDice = []
      if(this.held === false) {
        for(var i=1; i>0; i--){
          var num = Math.random();
            num = Math.floor(num*6);
            num = num+0;
        rolledDice.push(dice[num]);
        this.face = dice[num];
    }
    return rolledDice[0];
  }
    else {
    }
  };
  this.held = false;
};

function createStages() {
  this.stageOne = false;
  this.stageTwo = false;
  this.Win = false;
  this.meth = function() {
    if(this.stageOne === true) {
        var blurb = document.createElement('P');
        var StageOne = document.createTextNode('Stage One COMPLETE!');
        blurb.appendChild(StageOne);
      document.getElementById('Stage').appendChild(blurb);
    }
  }
};

function SaveDie(die) {
  if(die === '6.png'){
    die.held = false;
  }
  else {
    die.held = true;
  };
};

function newRoll(diceOne, diceTwo) {
  if(diceOne.held === false){
    document.getElementById('dice_image_one').innerHTML='';
    var one = document.getElementById('dice_image_one');
    var dieimg = document.createElement('img');
    dieimg.src = "/static/" +diceOne.numShowing();
    one.appendChild(dieimg);
    diceOne.num = dieimg.src;
  }
  if(diceTwo.held === false) {
    document.getElementById('dice_image_two').innerHTML='';
    var two = document.getElementById('dice_image_two');
    var diceImage = document.createElement('img');
    diceImage.src = "/static/" + diceTwo.numShowing();
    two.appendChild(diceImage);
    diceTwo.num = diceImage.src;
  }
  gameStages(diceOne, diceTwo);
};
function gameStages(diceOne, diceTwo){
    if(diceOne.face === "1.png" && diceTwo.face === "2.png" || diceOne.face === "2.png" && diceTwo.face === "1.png"){
        if (stage === 0) {
        stage = 1;
        var blurbone = document.createElement('P');
        var StageOne = document.createTextNode('Stage One COMPLETE!');
        blurbone.appendChild(StageOne);
        document.getElementById('Stage').appendChild(blurbone);
        };
    } else if (diceOne.face === "angry.png" && diceTwo.face === "4.png" || diceOne.face === "4.png" && diceTwo.face === "angry.png"){
        if (stage === 1) {
        stage = 2;
        var blurbtwo = document.createElement('P');
        var StageTwo = document.createTextNode('Stage Two COMPLETE!');
        blurbtwo.appendChild(StageTwo);
        document.getElementById('Stage').appendChild(blurbtwo);
        };
    } else if (diceOne.face === "angry.png" && diceTwo.face === "angry.png" || diceOne.face === "angry.png" && diceTwo.face === "angry.png"){
        stage = 0;
        var blurbzero = document.createElement('P');
        var StageZero = document.createTextNode('Stage Zero RESET!');
        blurbzero.appendChild(StageZero);
        document.getElementById('Stage').appendChild(blurbzero);
    } else if (diceOne.face === "5.png" && diceTwo.face === "6.png" || diceOne.face === "6.png" && diceTwo.face === "5.png"){
        if (stage === 2) {
        stage = 0;
        var blurbtres = document.createElement('P');
        var StageTres = document.createTextNode('Stage Three Win');
        blurbtres.appendChild(StageTres);
        document.getElementById('Stage').appendChild(blurbtres);
        }
    }
};

// function checkStages(diceOne, diceTwo) {
//   if(diceOne === "1.png" && diceTwo === "2.png" || diceOne === "2.png" && diceTwo === "1.png"){
//     var blurb = document.createElement('P');
//     var StageOne = document.createTextNode('Stage One COMPLETE!');
//     blurb.appendChild(StageOne);
//     document.getElementById('Stage').appendChild(blurb);
//   }
//   else{
//
//   }
//
// };
