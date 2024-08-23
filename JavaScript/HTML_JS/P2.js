var questions = [
    "1. HTML Stands For",
    "2. What is Object Oriented Programming",
    "3. FTP Stands For",
    "4. Identify Synax for HTML File",
    "5. Javascript is Scripting or Programming"
]
var questionNo = 0;
var totalQuestions = questions.length;
function load() {
    document.getElementById("question").innerHTML = questions[questionNo];
    document.getElementById("btnPrev").disabled = true;
}
function nextQuestion() {
    questionNo++;
    if (questionNo == totalQuestions) {
        document.getElementById("btnNext").disabled= true;
        questionNo = totalQuestions -1;
        alert("End of Exam...");
    }
    load();
    document.getElementById("btnPrev").disabled = false;
}
function prevQuestion() {
    questionNo--;
    if (questionNo < 0) {
        questionNo = 0;
        alert("No Questions Before this...")
    }
    load();
    document.getElementById("btnPrev").disabled = false;
    document.getElementById("btnNext").disabled= false;
}