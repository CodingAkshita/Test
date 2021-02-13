class Quiz {
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef  = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount(); 
          }
          
          question = new Question()
          question.display();
        }
}

play(){
    question.hide();
    background("yellow");    
    textSize(30)
    stroke("purple");
    fill("purple");
    text("Result of the Quiz",600,80);
    Contestant.getContestantinfo();
    if(allContestants!==undefined){
    var displayAnswer = 350;
        
       text("*NOTE: Contestant/Contestants who answered correct are highlighted in Green colour!",120,300);
       for(var plr in allContestants){
       var correctAns = "4";   
       if(correctAns===allContestants[plr].answer)
       fill("green"); 
       else
       fill("red");
       displayAnswer+= 30
       textSize(20)
       text(allContestants[plr].name+": "+allContestants[plr].answer,250,displayAnswer)
      }
  }
  }
}