const birthdayMusic = document.getElementById("birthdayMusic");
const welcomeScreen = document.getElementById("welcome");
const questionScreen = document.getElementById("questions");
const birthdayScreen = document.getElementById("birthday");

const startBtn = document.getElementById("startBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionText = document.getElementById("questionText");
const questionEmoji = document.getElementById("questionEmoji");

const teaseText = document.getElementById("teaseText");

const treatBtn = document.getElementById("treatBtn");
const finalMessage = document.getElementById("finalMessage");


/* -----------------------------------
   CHANGE YOUR FRIEND'S NAME HERE
----------------------------------- */

const friendName = "Shivaniiii";


/* -----------------------------------
   QUESTIONS
----------------------------------- */

const questions = [

    {
        text: "Are you ready for your birthday surprise? 🎁",
        emoji: "👀"
    },

    {
        text: "Do you think you are Motiii? 😏",
        emoji: "😂"
    },

    {
        text: "Sorry, Do you think you are cute? 😏",
        emoji: "😏"
    },


    {
        text: "Do you agree that I am your favourite friend? 👀",
        emoji: "❤️"
    },

    {
        text: "Will you give me a birthday treat? 🍕",
        emoji: "😋"
    },

    {
        text: "Promise karo Guwahati aaega toh humse milega 👀",
        emoji: "🥹"
    }

];


let currentQuestion = 0;


/* -----------------------------------
   START
----------------------------------- */

startBtn.addEventListener("click", () => {

    welcomeScreen.classList.remove("active");

    questionScreen.classList.add("active");

    showQuestion();

    birthdayMusic.volume = 0.35;

    birthdayMusic.play().catch(() => {
        console.log("Music could not start automatically.");
    });

});


/* -----------------------------------
   SHOW QUESTION
----------------------------------- */

function showQuestion() {

    const question = questions[currentQuestion];

    questionText.textContent = question.text;

    questionEmoji.textContent = question.emoji;

    teaseText.textContent = "";

}


/* -----------------------------------
   YES BUTTON
----------------------------------- */

yesBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showBirthday();

    }

});


/* -----------------------------------
   NO BUTTON
----------------------------------- */

/* -----------------------------------
   NO BUTTON - RUNAWAY BUTTON 😂
----------------------------------- */

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});


/* Mobile support */

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});


function moveNoButton() {

    teaseText.textContent =
        "Nice try 😂 You can't choose NO!";


    const container =
        document.querySelector(".buttons");


    const containerWidth =
        container.clientWidth;

    const containerHeight =
        container.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    /*
       Keep the button completely
       inside the button area.
    */

    const maxX =
        Math.max(0, containerWidth - buttonWidth);

    const maxY =
        Math.max(0, containerHeight - buttonHeight);


    const x =
        Math.random() * maxX;

    const y =
        Math.random() * maxY;


    /*
       Make sure NO stays visible.
    */

    noBtn.style.position = "absolute";

    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;


    /*
       Little teasing effect
    */

    noBtn.style.transform =
        `rotate(${Math.random() * 12 - 6}deg)`;
}


/* -----------------------------------
   BIRTHDAY SCREEN
----------------------------------- */

function showBirthday() {

    questionScreen.classList.remove("active");

    birthdayScreen.classList.add("active");

    document.getElementById("friendName").textContent =
        friendName;

    createConfetti();

}


/* -----------------------------------
   FINAL TREAT BUTTON
----------------------------------- */

treatBtn.addEventListener("click", () => {

    finalMessage.textContent =
        "I knew it! 😎❤️ Happy Birthday Shinchan! 🍕😂";

    createConfetti();

});


/* -----------------------------------
   CONFETTI
----------------------------------- */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.backgroundColor =
            randomColor();

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


function randomColor() {

    const colors = [

        "#ff4081",
        "#ff9800",
        "#4caf50",
        "#2196f3",
        "#9c27b0",
        "#f44336",
        "#ffd600"

    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicBtn.textContent = "🎵 Music";

    } else {

        birthdayMusic.pause();

        musicBtn.textContent = "🔇 Music";

    }

});