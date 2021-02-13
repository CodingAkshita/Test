var canvas;
var gameState = 0
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var answer;
var allContestants

function setup(){
  canvas = createCanvas(1350,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink")
  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play()
  }  
}
