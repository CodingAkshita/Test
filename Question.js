class Question {
    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Option");
      this.button = createButton('Submit');  
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');      
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
      this.title = createElement('h2');
      
    }
     hide(){
       this.title.hide();
       this.input2.hide();
      this.input1.hide();
      this.button.hide();
      
     }
    display(){
      
      stroke("white");
      fill("white");
      this.title.html("My Quiz Game");
      this.title.position(630, 10); 
       
      this.question.html("Question:- How many months of a year has 28 days?");
      this.question.position(450,80);
      this.option1.html("1) 1 month");
      this.option1.position(550,120);
      this.option2.html("2) 3 months");
      this.option2.position(750,120);
      this.option3.html("3) 0 months");
      this.option3.position(550,180);
      this.option4.html("4) 12 months");
      this.option4.position(750,180);
      
      this.input1.position(130, 160);
      this.input2.position(330,150);
      this.button.position(280,300);
  
        this.button.mousePressed(() =>{
        this.input1.hide();
        this.button.hide();
         this.input2.hide();
         this.title.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount
        contestant.update()
        contestant.updateCount(contestantCount);
        });

      
    }
  }
  