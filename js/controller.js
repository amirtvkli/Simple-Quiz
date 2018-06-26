 $(document).ready(function () {
	var questionNumber=0;
	var questionBank=new Array();
	var stage="#game1";
	var stage2=new Object;
	var questionLock=false;
	var numberOfQuestions;
	var score=0;
var distance='600px';
	$.getJSON('db/db.json', function(jsonData, textStatus) {
				for(i=0;i<jsonData.quizlist.length;i++){ 
			questionBank[i]=new Array;
			questionBank[i][0]= (i+1).toString() +'. ' +jsonData.quizlist[i].question;
			questionBank[i][1]='a. '+jsonData.quizlist[i].option1;
			questionBank[i][2]='b. '+jsonData.quizlist[i].option2;
			questionBank[i][3]='c. '+jsonData.quizlist[i].option3;
			questionBank[i][4]='d. '+jsonData.quizlist[i].option4;
			questionBank[i][5]=jsonData.quizlist[i].source;
		}
		numberOfQuestions=questionBank.length; 
		displayFirstSlide();
	})//gtjson
	
	function displayFirstSlide(){
		$(stage).append(`
		<div class="">
		<p>Test your UX knowledge by taking this quiz includs 10 questions. At the end you can see the articles that all questions and answers are based on.</p>
		<p>click on the \'start\' button to begin.</p>
		<button id="start" class="ui green button">Start</button>
		<div id="spacer"></div>
		<p>This Quiz is designed by <a href="https://www.nngroup.com/articles/author/raluca-budiu/">Raluca Budiu</a> on January 7, 2018</p>
		</div>
		`);
		$('#start').click(function(){
			$(stage).empty();
			displayQuestion();
		})
	}
	function displayQuestion(){
		var rnd=Math.random()*4;
		rnd=Math.ceil(rnd);
		var q1;
		var q2;
		var q3;
		var q4;

		if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
		if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
		if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
		if(rnd==4){q4=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q3=questionBank[questionNumber][4];}

		$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="3" class="option">'+q4+'</div>');
		
		$('.option').click(function(){
			document.getElementById("game1").style.color = "grey";
			document.getElementById("game2").style.color = "grey";
			if(questionLock==false){questionLock=true;	
				//correct answer
				if(this.id==rnd){
					$(stage).append(`<a class="ui green text label">  <i class="mail icon"></i> CORRECT </a>`);
					score++;
				}
				//wrong answer	
				if(this.id!=rnd){
					$(stage).append(`<a class="ui red text label">  <i class="mail icon"></i> WRONG </a>`);
				}
				setTimeout(function(){changeQuestion()},1000);
			}})
		}//display question
		
		function changeQuestion(){
			
			questionNumber++;
			if(stage=="#game1"){stage2="#game1";stage="#game2";}
			else{stage2="#game2";stage="#game1";}
			if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
			$(stage2).animate({"right": "+="+distance},"slow", function() {$(stage2).css('right','-'+distance);$(stage2).empty();});
			$(stage).animate({"right": "+="+distance},"slow", function() {questionLock=false;});
			document.getElementById("game1").style.color = "black";
			document.getElementById("game2").style.color = "black";
		}//change question
		
		function displayFinalSlide(){
			$(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		}//display final slide
	});//doc ready