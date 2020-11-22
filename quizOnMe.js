var queBank = [
	{
		question: `
	What is my favourite color?
	a: Black
	b: Green
	c: White\n`,
		answer: "b"
	},
	{
		question: `
	How many friends do i have?
	a: 0
	b: more then 0\n`,
		answer: "b"
	},
	{
		question: `
	Which is my favourite dish?
	a: Pizza
	b: Chaat
	c: Biryani
	d: Chole bhature\n`,
		answer: "c"
	},
	{
		question: `
	What is my personality type?
	a: Introvert
	b: Extrovert
	c: Ambivert\n`,
		answer: "a"
	},
  	{
		question: `
	If given a chance where will i go?
	a: Back in time
	b: Forward in time
\n`,
		answer: "a"
	}
];


var highscorers=[
  {
    highscoreuser:5,
    namee:"Sanskriti",
  },
  {
    highscoreuser:4,
    namee:"Sam",
  }
];


const chalk = require('chalk');
var readLineSync=require('readline-sync');
var score=0;
var highscore=0;
var highscoreplayer="";
console.log(chalk.bgBlue.bold('This is a quiz on how well you know me\n\n'));
console.log("")

var userName=readLineSync.question('Whats your name?\n');
console.log(`Welcome ${userName} do you know sanskriti`);


//play function
function play(question, ans){
  console.log("========================================")
  console.log(chalk.bold.yellow(question));
  var userAnswer=readLineSync.question('Whats your answer?\n');
  if(userAnswer===ans){
     console.log(chalk.bold.green("correct answer\n"));
   

    score++;
    console.log(chalk.bold.green("your score is "+score));
  }
  // if(userAnswer==="exit"){
  //   break;
  // }
  else{
    console.log(chalk.bold.red("wrong answer\n"));
    console.log(chalk.bold.red("your score is "+score));
  }

  console.log("========================================")

}
//---------------------

for(var i=0;i<=queBank.length-1;i++){
 play(queBank[i].question,queBank[i].answer);
}

if(score==0){
  console.log(chalk.bgMagenta("oh what a poor performance"));
}

if(score==5){
  console.log(chalk.bgMagenta("No need to be soo happy, You may have scored full but you still dont know me"));
}

console.log("\n\n your final score is " + score+"\n\n");

console.log( chalk.blue.underline.bold('LeaderBoard'));
highscorers.forEach(function(i){
console.log(i.highscoreuser +"\t"+i.namee);
});
