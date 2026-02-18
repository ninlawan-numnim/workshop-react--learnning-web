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
] ;

console.log("total questions:", question.length);
console.log("first question:", question[0]);
console.log("second question:", question[1]);