# User-Experience Quiz

What you will learn:
how to build a simple multiple choice quiz as a web page
basic techniques and technologies used in HTML5
Prerequisites:
basic knowledge or experience with HTML or Javascript will be helpful

Required time: 
1 - 2 hours

Notes:
This will be a great project for anyone starting out in HTML5 who wants a simple and fun project to build. It’s a multiple choice quiz that we can put on a website! We can make it easy to extend and add questions to and we can even make sure it will work on a mobile phone. And if you just want to grab the source code without following the tutorial, then that’s fine, too.


I recommend using Firefox for this tutorial. We will be using JSON which Chrome and some other browsers will not display if offline.


VIEW DEMO

DOWNLOAD SOURCE
 

HTML

Step 1 - Setting up the HTML document
Although you could use Dreamweaver or similar software, to create an HTML document, you don’t need any special software, you can simply use any text editor such as Textpad or Wordpad. Open your text editor and type:


<!DOCTYPE HTML>
      <head>
     	<title>MCQ Quiz Sample</title>
      	<link href="main.css" rel="stylesheet" type="text/css"/>
      	<script src="jquery.js"></script>
      	<script src="controller.js"></script>
      </head>
      <body>
      	<div id="topbar">HTML5 MCQ Quiz</div>
      	<div class="spacer"></div>
      	<div id="navContent">
     	 	<div id="game1"></div>
     		<div id="game2"></div>
      	</div>
      </body>
</html>
      
 

Believe it or not, that’s our whole html document, except for one line which we will add later to make it mobile-friendly.
The <title> line controls what is shown on the browser tab as the title or description of the page. [3].

The next line tells our page to look for a document called ‘main.css’ which will hold all of our style information (background colors and so on). [4].

The first <script> line tells the page to look for a JavaScript file called ‘jquery’. This is a standard JavaScript ‘extension’ widely used by developers to make JavaScript more powerful. We will not need to write this file ourselves. [5].

The second <script> line tells the page to look for a JavaScript file called ‘controller.js’. This is the file we will use to control the quiz interactivity. [6].

The next few lines, in the <body> of the page name ‘div’s or dividers that we will use to hold the page content. The ‘topbar’ will hold our page title. The ‘spacer’ div will make space on our page. ‘navContent’ holds two containers: ‘game1’ which will hold the current question and ‘game2’, which will hold the next question. [8-15].

Notice that most divs have an id, a unique identifier. One of them has a class name instead of an id name. That means we may use it more than once.

Save the document as index.html. Test it out by opening it in a browser* (right-click and choose Open With and choose a browser). Obviously, there will not be much to see yet.



Project Management 
Step 2

So we know that we will need the following files to build our project:

- index.html, which we have already done.
- main.css, which will hold the style information
- jquery.js, which will enhance standard JavaScript
- controller.js, which will control the quiz
- activity.json, which will hold our question database

All of these files can be written in a text editor, just like index.html, so there’s no need for any special software.


Database
Step 3 – Build a question database

Create a file in your text editor named activity.json. Then open it up and type in the following:

    {"quizlist":[
      {
      "question":"Portuguese is spoken in ______",
      "option1":"Brazil",
      "option2":"Argentina",
      "option3":"Ecuador"
      },
      {
      "question":"What is the capital of Peru?",
      "option1":"Lima",
      "option2":"Bogota",
      "option3":"San Juan"
      },
      {
      "question":"Which country is long and thin?",
      "option1":"Chile",
      "option2":"Uruguay",
      "option3":"Colombia"
      }
      ]
      }
      
This is a JSON file and it holds data in groups. We can use it to hold our question database. You’ll notice that it is easily readable by either machine or human.

Each JSON element holds a question and three options. We will write the quiz in such a way that option1 is always the correct answer in our database, but the options will be randomised when shown to the user. This will make life a little simpler for us.

Later, if we wish to change or add any questions, this is the only file we will need to modify. We can add as many questions as we want – we will program the quiz to know when to stop. That means our quiz can be recycled and can even be edited by someone with very little technical expertise.

*Note that you will need to make sure that you stick very carefully to the format with JSON files. A missing or extra comma, for example, can cause problems.

Save the file and continue.


Step 4 – Gather assets

The only external asset that we need is our JQuery file. You can either get it from the source files in the link below or if you want the latest version, you could download it from jquery.com. I am using version 1.9.1. If you use a later version, be sure to shorten the name to jquery.js


CSS

Step 5 – Build a style sheet

We will use a CSS file to control the look and feel of our quiz. Later if we need to modify the look and feel, we need only modify the CSS file.

Create a document entitled main.css and open it with any text editor.

html, body {
      margin: 0;
      padding: 0;
      background-image:url(greybg.png);
      font-family: Arial, Helvetica, sans-serif;
      }
      
 

This tells us that we will use a background image called greybg.png as the background for the entire page. (It is a small image which will repeat itself; make sure to get it from the source files and place it in your project folder.) Then unless we override it, we will use Arial font, or Helvetica or sans-serif if Arial is not available. We set margin and padding to 0 so that the page will not have any extra spacing.

#navContent{
      margin:auto;
      width:800px;
      height:400px;
      position:relative;
      overflow:hidden;
      }
#game1{
      margin:auto;
      width:800px;
      height:400px;
      right:0px;
      position:absolute;
      }
#game2{
      margin:auto;
      width:800px;
      height:400px;
      right:-800px;
      position:absolute;
      }
      
 

 

navContent will be our outer container, holding game1 and game2, which will contain the current and next questions.

We want our quiz to be 800 pixels wide, 400 pixels in height and centered horizontally on the page (margin:auto). Anything that ‘sticks out’ of this area will be hidden (overflow:hidden). ‘game2’ will begin outside of this area (right:-800px) and hence will be hidden.

In CSS, we refer to an ID name by a hashtag (#) and we refer to a class name by a dot (.). Remember, we expect to reuse class names for multiple elements, but the ID name should refer to a unique element. Some standardised elements (body/html) are referred to directly without a hashtag or dot.

Let’s continue:

.questionText{
      font-size:27px;
      color:#FFF;
      }
.option{
      width:400px;
      height:30px;
      margin:15px;
      font-size:18px;
      color:#FFFFFF;
      padding:2px;
      padding-left:10px;
      border: 2px solid white;
      cursor:pointer;
      background-color:#3399FF;
      }
.option:hover{
      border:#FC0 solid 2px;
      color:#FC0;
      }
      

We define our question text font-size and color (#fff is white). If you need a reference for color codes, try colorpicker.com 

We want our answer options to have a font size of 15. We need a margin of 15 pixels just to space them out. We want a white border around them (border: 2px solid white) and a blue background (background-color:#3399FF). We should show a pointer so that the user knows they are clickable (cursor:pointer).

When the user mouses over an option, the border should turn yellow, for a nice effect (border:#FC0 solid 2px). And the text should turn yellow too (color:#FC0).

Now for a couple of miscellaneous items:

#topbar{
      height:50px;
      margin:auto;
      margin-top:50px;
      color:#FFF;
      font-size:36px;
      font-family:Arial, Helvetica, sans-serif;
      width:800px;
      border-bottom:solid white 1px;
      }
.spacer{
      height:30px;
      }
      
 

 

‘topbar’ will hold our title, which you can check looking back at the HTML file. We will use a large font and a line along the bottom (border-bottom:solid white 1px;). ‘spacer’ simply adds a little space between the title and the beginning of the quiz.
Although we are not reusing ‘spacer’, we define it as a class because we might reuse it in other projects. A good designer always produces recyclable content and CSS files are very easy to reuse.

Let’s finish off our CSS:

 .feedback1{
      width:150px;
      padding:5px;
      font-size:30px;
      color:#FFFFCC;
      background-color:#009900;
      font-family:Arial, Helvetica, sans-serif;
      text-align:center;
      }
           
.feedback2{
      width:150px;
      padding:5px;
      font-size:30px;
      color:#FFFFCC;
      background-color:#CC3300;
      font-family:Arial, Helvetica, sans-serif;
      text-align:center;
      }
      
 

We will use ‘feedback1’ and ‘feedback2’ to style two messages: CORRECT and WRONG depending on whether the user gets the question right or not. You can see that the only difference between the two styles is that one has a green background [6] and the other has a red background [16].

That will do for the CSS for now. We will add some more later to ensure the quiz works on a mobile phone.

 

Javascript


Step 6 – Creating the JavaScript code

Well, so far we’ve done a lot of work and we have little to show for it! We’d better remedy that.

Create a document called controller.js, save it and open it with a text editor or other program.

$(document).ready(function () { 
    
    });
    

This is how we begin and all of our code will fall between these two lines. It basically says that we will do the following as soon as the document is ‘ready’ in the browser.

We’ll begin by defining the various variables we will need to use:

var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
      
 

We will always try to keep our variables ‘human and machine readable’. For example, we can see the variable numberOfQuestions refers to the number of questions. Following this principle makes it really easy to read your code.

An array is a series of variables. For example, if a=["tiger","lion","panther"] then a[0] is tiger, a[1] is lion and so forth.

‘stage’ and ‘stage2’ are objects that we will use to refer to the containers for the current and next questions.

Right then, we need to get the data from our JSON file into a useable format in controller.js. Here’s how:

$.getJSON('activity.json', function(data) {
    for(i=0; i<data.quizlist.length; i++){
      questionBank[i]=new Array;
      questionBank[i][0] = data.quizlist[i].question;
      questionBank[i][1] = data.quizlist[i].option1;
      questionBank[i][2] = data.quizlist[i].option2;
      questionBank[i][3] = data.quizlist[i].option3;
      }
      numberOfQuestions = questionBank.length;
      alert(questionBank);
})//getJSON
 

We use the command $.getJSON to read our JSON data and call a function to format it. The $.getJSON() command is an example of a function from JQUERY. Without our JQUERY extension, we would not be able to use this code. Code that begins with a ‘$’ references JQUERY.

We loop through all the JSON elements inside the quizlist element, i.e. all of our questions. Then we use the data to form an array of information called questionBank. We are using a two-dimensional array here:

One dimensional array: questionBank = ["cat","dog","fox"]; (questionBank[1]= "dog")

Two dimensional array: questionBank=[["cat", "dog", "fox"], ["lion", "tiger", "zebra"],[ "kangaroo", "koala", "wallaby"]]; (questionBank[1][2]= "zebra")

Once the array is full, we can use its length to determine the number of questions [9]. The next line, alert(questionBank); is only for testing; it will display the contents in an alert (pop up) window so that we can ensure everything is working so far.

Now would be a good time to test the app. Right-click on index.html and open it in Firefox, or Internet Explorer. You should see a pop up window displaying the contents of the database, as shown below. If not, review the code so far to check for mistakes.




Step 7 – Displaying the questions

Find the line that says alert(questionBank);

Delete it and in its place add:

displayQuestion();

This will call the function to display a question. We will write this function now. It can be placed immediately after the previous code that ends with the line: })//getJSON

function displayQuestion(){
      var rnd=Math.random()*3; 
      rnd=Math.ceil(rnd);
      var q1;
      var q2;
      var q3;
     
	  if(rnd==1){q1=questionBank[questionNumber][1]; q2=questionBank[questionNumber][2]; q3=questionBank[questionNumber][3];}1
      if(rnd==2){q2=questionBank[questionNumber][1]; q3=questionBank[questionNumber][2]; q1=questionBank[questionNumber][3];}
      if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}
    
    $(stage).append('<div class = "questionText">' + questionBank[questionNumber][0] + '</div><div id= "1" class="option">'+q1+'</div> <div id="2" class="option">'+q2+'</div> <div id="3" class="option">'+q3+'</div>');
    
    $('.option').click(function(){
      if(questionLock==false){questionLock=true; 
      //correct answer
      if(this.id==rnd){
      $(stage).append('<div class="feedback1">CORRECT</div>');
      score++;
      }
      //wrong answer 
      if(this.id!=rnd){
      $(stage).append('<div class="feedback2">WRONG</div>');
      }
      //setTimeout(function(){changeQuestion()},1000);
      }})
      }//display question
      
 

First of all we declare a variable rnd and use it to generate a random number between 0 and 2 [2]. We then round up this number using Math.ceil() so that we are left with an integer between 1 and 3. We will use this random number to choose the pattern in which the options are displayed. If rnd is equal to one, then q1 refers to the first option, which is also the answer. If rnd is equal to two, then q2 is the answer and q1 and q3 are the distractor options, and so on.

The next line is very important to understand. We are going to add content to the ‘stage’, which references #game1. We add HTML content to the page dynamically through our code, first adding the question text and then adding the options and formatting information [12]. Note that each option is assigned an ID of 1,2 or 3. We will use this ID to check the answer.

We then add a ‘listener’ to the class ‘.option’ [14-26]. That means it will attach to all three options on the screen. This listener will detect a ‘click’ – but it will also detect a touch on a mobile device.

We need a mechanism to ‘lock’ the question so that, once answered, it cannot be answered again [15/26]. Hence we have the variable questionLock. If it is false, we set it to true and check the answer. If it is already set to true, the next part is ignored.

To check the answer, we use the line: 

if(this.id==rnd){}

In this case ‘this’ is the element which was clicked and this.id is the id number we gave the element. The way we set up the options, if the id number coincides with our variable rnd, it is the correct answer. If not, it is the wrong answer:

if(this.id!=rnd){}

In JavaScript (and most other coding languages), != means ‘does not equal’.

If the answer is correct, we add another piece of HTML, a <div> of the class feedback1 (green background) containing the text CORRECT [18]. We then increment the score (score++;) [19].

If the answer is wrong, we add a <div> of class feedback2 (red background) and the text WRONG [23].

We then have a line of code beginning with setTimeout(). We will ignore this for just a moment. The two slashes (//) at the beginning of a line are used for comments, but we can also use them to temporarily disable code.

Now would be a great time to test what we have so far. Open index.html in your browser and you should see this:



Keep in mind that the answers are randomised, so you may see the options in a different order. Now try clicking on the correct answer:



And then, refresh the page and try clicking on the wrong answer. Is everything working? If not, go back and check the code. If so, let’s carry on.


Step 8 – Transitioning the questions

Next, we need to have a way of moving on to the next question. How we are going to this is to wait one second after the answer has been selected, then move this question offscreen to the left while bringing in the new question onscreen from the right.

First reenable this line of code by removing the double slashes:

setTimeout(function(){changeQuestion()},1000);

This line tells us to wait for 1000 milliseconds (one second) and then perform the function changeQuestion(). We haven’t written the function changeQuestion yet, so we’d better do it:

 

function changeQuestion(){

	questionNumber++;

	if(stage=="#game1"){stage2="#game1";stage="#game2";}
	else{stage2="#game2"; stage="#game1";}

	if(questionNumber < numberOfQuestions){displayQuestion();}
	//else{displayFinalSlide();}

	$(stage2).animate({"right": "+=800px"} , "slow" , function() { $(stage2).css('right' , '-1800px'); $(stage2).empty(); });
	$(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
}//change question

    
There we go. The first thing is to increase the variable that tracks the question number [3].

On the next two lines, we perform a switcheroo. If our stage variable points to #game1, we switch it to #game2 and vice versa. Likewise with a second variable stage2 [5-6].

We are always going to use stage to bring the new question in and use stage2 to remove the old question.

The next line checks whether (questionNumber < numberOfQuestions). If so, we can load up the next question, recycling the function we used before (displayQuestion). If not, we will display our final slide. The last part is temporarily disabled so we can test this function.

We then use a piece of code from JQUERY, animate, to transition the page elements, giving the direction, speed and running a function when the transition is complete [11-12].

When the transitions are complete, we move stage2 back offscreen to the right by amending its CSS property $(stage2).css('right' , '-800px'); We then empty its contents ($(stage2).empty();) and it will sit there waiting for the next question [11-12].

When stage1 has completed its transition, we remove the question lock (questionLock=false) so that the next question can be answered.

This mechanism we have built can be used to cycle through all the questions. Test it out now.


Step 9 – Ending it

We should display a score page when the quiz has ended. In the previous code, make sure this line is fully enabled by removing the double slashes:

else{displayFinalSlide();}

Then we need to flesh out the last part of our Javascript code thus:

 

function displayFinalSlide(){

	$(stage).append(" <div class='questionText' >You have finished the quiz!<br><br>Total questions: "+numberOfQuestions+"<br>Correct answers: "+score+"</div>");

}//display final slide
   
    
Well, that’s short and sweet. For the final page, we will append a piece of code that offers a message and tells us our score, using the variable we have been tracking[3].

We have recycled the class ‘questionText’ for the styling, which is technically a no-no because it could confuse people reading the code. But just this once it should be fine; let’s save ourselves some work. Note that we use the simple technique of adding line breaks (<br>) to space the message out nicely.

Now try running the quiz again and after three questions, you should get a page like this:



 

Mobile

Step 10 – Making it work in mobile

Well, our quiz is now working. Hooray!

But wait, there more, as they like to say on the TV ads. With a few more lines of code, we can make sure that the quiz can work on a small screen, such as a phone.

You can do a basic test with your browser by dragging the edge with your mouse until it is narrow, like a phone screen. You will see something like the image here:



See? It sticks out because some parts of the page have a width of 800 pixels. But to work on a phone, we want it to work down to a width of about 320 pixels – the width of a typical iPhone screen.

Our solution is something called ‘media queries’. We can set different CSS rules depending on the width of the screen.
At the end of our CSS file, let’s add:


@media screen and (max-width:800px) {
	#topbar{margin-left:1%;margin-right:1%;width:96%;}
	#navContent{margin:1%;width:98%;}	
	#game1{margin:1%;width:98%;}
	#game2{margin:1%;width:98%;}
}

@media screen and (max-width:460px) {
	.option{width:80%;margin-top:5%;}
} 
    
To make a long story short, wherever we have a width of 800 pixels, when the width is less than 800px, we change the rules to percentages, so that it will fill 98% of the container with a 1% margin on each side [1-6].

Then, because our options are 400 pixels wide, we need to switch to percentage-based widths when the screen is small. We’ll do it when the screen is smaller than 460 pixels wide [9-11], to take into account the widths added by the margins.

Hence, 800 and 460 are our ‘breakpoints’, since the layout will be redefined (slightly) at these widths.

To avoid issues with Android phones, we need to go back to the index.html file and add this line in the <head> section:


<meta name=viewport content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">   


This ensures Android will use the phone width as the width for CSS. It also prevents users from zooming in and out of the page, which is not good when a page has interactivity, such as questions.
Test it again, this is with a width of 320px:



And we’re done! Phew! It was a long journey, but along the way we learned HTML5, CSS, JavaScript and JSON techniques. 

And you have working, recyclable code for a multiple choice test.

Troubleshooting and more resources:

1 When testing offline, Chrome will not read JSON files. Use Firefox for testing offline

2 Some webhosting services still do not recognise JSON. If your quiz works offline, but not on your server, this may be the case. Contact your hosting company. Click HERE for a version that does not use JSON.

3 Some people have requested a version where the questions are randomised. Click HERE for this.

I hope you enjoyed learning from this tutorial.


If you like this tutorial or anything else on Flash By Night, please show your appreciation by mentioning it on Facebook, Twitter, Pinterest, StumbleUpon or any other favorite social media. Like the FlashByNight Facebook page to get updates via Facebook.

