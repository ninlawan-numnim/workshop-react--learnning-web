console.log("hello from learn.js");

let score = 0;
let playerName = "Player1";
let isPlaying = true;

console.log(`Welcome, ${playerName}! Your current score is ${score}.`);
console.log("palying status:", isPlaying);

score = 10;
console.log(`Your new score is ${score}.`);

const question = [
    {
        thai: "สวัสดี",
        english: "Hello",
        pronunciation: "sawasdee"
    },
    { 
        thai: "ขอบคุณ", 
        english: "Thank you", 
        pronunciation: "khob khun" }, 
    {
        thai: "ลาก่อน",
        english: "Goodbye",
        pronunciation: "laa gorn"
    },
    {
        thai: "ขอโทษ",
        english: "Sorry",
        pronunciation: "kho thot"
    },
    {
        thai: "ใช่",
        english: "Yes",
        pronunciation: "chai"   
    },
    {
        thai: "ไม่ใช่",
        english: "No",
        pronunciation: "mai chai"
    }
] 

console.log("total questions:", question.length);
console.log("first question:", question[0]);
console.log("second question:", question[1]);

for (let i = 0; i < question.length; i++) {
    console.log("thai:  "+question[i].thai);
    console.log("english:  "+question[i].english);
    console.log("how to say:  "+question[i].pronunciation);
    
}

function chexkAnswer(question, userAnswer) {
    const correctAnswer = question.english;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score += 10;
        return("Correct!");
        
    } else {
        console.log("Incorrect. The correct answer is: " + correctAnswer);
    }
}
//test the function
console.log(chexkAnswer(question[0], "Hello"));
console.log("current score:", score);
console.log(chexkAnswer(question[1], "sorry"));
console.log("current score:", score);


function WelcomeMessage(playerName) {
    return <h1>Welcome!</h1>;
}