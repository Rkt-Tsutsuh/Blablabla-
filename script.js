const questions = [
    {
        question: "Si je te dis que j'ai pas manger de toute la journée, qu'est-ce que tu ferais?🙄",
        options: ["M'acheter à manger", "Me laisser à ma famine", "Me donner de l'eau"],
        correctAnswer: "M'acheter à manger",
        correctImage: "8.jpg",
        incorrectImage: "10.jpg",
        feedbackCorrect: "Ansekakooo😍🤣",
        feedbackIncorrect: "Ay dia sahanao? Raha mivady isika ataoko salade foana ny laoka😤"
    },
    {
        question: "Oviana indray vao mba andeh hivaoka?😭😂",
        options: ["Demain", "Lendemain", "Je ne sais pas"],
        correctAnswer: "Demain",
        correctImage: "6.jpg",
        incorrectImage: "3.jpg",
        feedbackCorrect: "Oeeeeee🥳",
        feedbackIncorrect: "Marary ny foko sa ny vavoniko tsy aiko fa marary fotsiny 😔"
    },
    {
        question: "Qu'est ce que tu aimes le plus?🤭",
        options: ["Voyager", "Faire la fête", "kjofkjof"],
        correctAnswer: "kjofkjof",
        correctImage: "5.jpg",
        incorrectImage: "2.jpg",
        feedbackCorrect: "Efa haiko mintsy😂",
        feedbackIncorrect: "Tsy nampoziko, ndana ko e😕"
    },
    {
        question: "Jusqu'à quand est-ce que tu m'aimeras?",
        options: ["Je ne t'aime plus","1ans","Toujours"],
        correctAnswer: "Toujours",
        correctImage: "1.jpg",
        incorrectImage: "2.jpg",
        feedbackCorrect: "i love you too💖",
        feedbackIncorrect: "Tsisy oe fa aza mitapitapy🙄"
    }
];

let currentQuestionIndex = 0;
let countdownValue = 5;

function startCountdown() {
    const countdownDiv = 
    document.getElementById("countdown");
    countdownDiv.innerText = countdownValue;
    if (countdownValue > 0) {
        countdownValue--;
        setTimeout(startCountdown, 1000);
    } else {
        showWelcomeMessage();
    }
}

function showWelcomeMessage() {
    const countdownDiv = 
    document.getElementById("countdown");
    countdownDiv.style.display = "none" // Cacher le compte à rebours

    const welcomeMessageDiv = 
    document.getElementById("welcomeMessage");
    welcomeMessageDiv.style.display = "block"; // Afficher le message de bienvenu
}

function startQuiz() {
    const welcomeMessageDiv = 
    document.getElementById("welcomeMessage");
    welcomeMessageDiv.style.display = "none"; // Cacher le message de bienvenu

    showQuestion();
}

function showQuestion() {
    const questionSection = document.getElementById("questionSection");
    questionSection.style.display = "block"; // Afficher la section section

    const questionData = questions[currentQuestionIndex];
    // Met à jour la question
    document.getElementById("question").innerText = questionData.question;
    // Réinitialise les choix
    const choicesDiv = document.getElementById("choices");
    // Effacer les choix précédents
    choicesDiv.innerHTML= ''; 
    
    // Force le style flex à chaque réinitialisation
    choicesDiv.style.display = "flex";
    choicesDiv.style.flexDirection= "column";
    choicesDiv.style.gap = "10px"; // Ajoute l'espacement vertical

    // Ajouter les nouveaux choix
    questionData.options.forEach(option => {
        const button = 
        document.createElement("button");
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        choicesDiv.appendChild(button);
    });
}

function handleAnswer(selectedAnswer) {
    const questionData = questions[currentQuestionIndex];
    const feedbackDiv = 
    document.getElementById("feedback");
    const questionDiv = document.getElementById("question"); // Element contenant la question
    const choicesDiv = document.getElementById("choices"); 

    // Cacher la question et les choix
    questionDiv.style.display = "none";
    choicesDiv.style.display = "none";

    //Montre le feedback (texte et image)
    if (selectedAnswer === questionData.correctAnswer) {
        feedbackDiv.innerHTML = `<p>${questionData.feedbackCorrect}</p><img src="${questionData.correctImage}" alt="Correct" style="width: 60%; max-width: 400px; height:auto; border-radius: 10px; margin: 10px auto;">`;
    } else {
        feedbackDiv.innerHTML = `<p>${questionData.feedbackIncorrect}</p><img src="${questionData.incorrectImage}" alt="Incorrect" style="width: 60%; max-width: 400px; height:auto; border-radius: 10px; margin: 10px auto;">`;
    }

    //Attendre 3 secondes avant de passer à la question suivante ou au message final
    setTimeout(() => {
        feedbackDiv.innerHTML = ''; // Cache le feedback
        questionDiv.style.display = "block" // Réafficher la question pour la suivante
        choicesDiv.style.display = "block" // Rénitialise pour la prochaine question
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(); // Affiche la question suivante
        }else {
            questionSection.style.display = "none"; //Cache la section des questions
            showFinalMessage(); //Affiche le message final
        }
    },3000);
}

function showFinalMessage() {
    const finalMessageDiv = 
    document.getElementById("finalMessage");
    finalMessageDiv.style.display = "block";
    finalMessageDiv.innerHTML = `
    <p>Et voici un petit cadeau💝:</p>
    <p style="font-size: 2em; font-weight: bold; color: #ff0076;">Je t'aime plus que tout</p> 
    <p>Même si je m'énerve souvent contre toi avec mes shhh et blablabla que tu connais bien
    sache que tu comptes beaucoup pour moi.</p>
    `;
}

//Démarer le compte à rebours
startCountdown();