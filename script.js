const missing_students = [
    {
        name: "Andjela Saponjic",
        image: null,
    },
    {
        name: "Cazpian Levén",
        image: null,
    },
    {
        name: "Frida Lam",
        image: null,
    },
    {
        name: "Maxim Khnykin",
        image: null,
    },
    {
        name: "Philip Le",
        image: null,
    },
];

const students = [
	{
	  name: "Adi Dzocaj",
	  image: "images/students/adi-dzocaj.jpg",
	},
	{
	  name: "Alexander Bergquist",
	  image: "images/students/alexander-bergquist.jpg",
	},
	{
	  name: "Alexander Kocman",
	  image: "images/students/alexander-kocman.jpg",
	},
	{
	  name: "Benjamin Benson",
	  image: "images/students/benjamin-benson.jpg",
	},
	{
	  name: "Benjamin Tsubarah",
	  image: "images/students/benjamin-tsubarah.jpg",
	},
	{
	  name: "Calle Nilsson",
	  image: "images/students/calle-nilsson.jpg",
	},
	{
	  name: "Chikage Takahashi Molander",
	  image: "images/students/chikage-takahashi-molander.jpg",
	},
	{
	  name: "Daniel Be",
	  image: "images/students/daniel-be.jpg",
	},
	{
	  name: "Daniel Carlsson",
	  image: "images/students/daniel-carlsson.jpg",
	},
	{
	  name: "Elin Ahlgren",
	  image: "images/students/elin-ahlgren.jpg",
	},
	{
	  name: "Emma Käck",
	  image: "images/students/emma-kack.jpg",
	},
	{
	  name: "Eric Ståhl",
	  image: "images/students/eric-stahl.jpg",
	},
	{
	  name: "Frans Gustavson Påsse",
	  image: "images/students/frans-gustavson-passe.jpg",
	},
	{
	  name: "Glafira Veretennikova",
	  image: "images/students/glafira-veretennikova.jpg",
	},
	{
	  name: "Gustaf Grönlund",
	  image: "images/students/gustaf-gronlund.jpg",
	},
	{
	  name: "Hanna Håkanson",
	  image: "images/students/hanna-hakanson.jpg",
	},
	{
	  name: "Heidi Sjöberg",
	  image: "images/students/heidi-sjoberg.jpg",
	},
	{
	  name: "Hugo Carzborn",
	  image: "images/students/hugo-carzborn.jpg",
	},
	{
	  name: "Jesper Kling",
	  image: "images/students/jesper-kling.jpg",
	},
	{
	  name: "Johan Ranestam",
	  image: "images/students/johan-ranestam.jpg",
	},
	{
	  name: "Johanna Bäckström",
	  image: "images/students/johanna-backstrom.jpg",
	},
	{
	  name: "Johanna Jönsson",
	  image: "images/students/johanna-jonsson.jpg",
	},
	{
	  name: "Jona Torsson",
	  image: "images/students/jona-torsson.jpg",
	},
	{
	  name: "Josefine Ahlstedt",
	  image: "images/students/josefine-ahlstedt.jpg",
	},
	{
	  name: "Julia Jespersdotter Högman",
	  image: "images/students/julia-jespersdotter-hogman.jpg",
	},
	{
	  name: "Julia Nemell",
	  image: "images/students/julia-nemell.jpg",
	},
	{
	  name: "Linus Lindberg",
	  image: "images/students/linus-lindberg.jpg",
	},
	{
	  name: "Malin Olsson",
	  image: "images/students/malin-olsson.jpg",
	},
	{
	  name: "Maria Haara-Lundhammar",
	  image: "images/students/maria-haara-lundhammar.jpg",
	},
	{
	  name: "Maria Lövgren",
	  image: "images/students/maria-lovgren.jpg",
	},
	{
	  name: "Nikola Dimitrijoski",
	  image: "images/students/nikola-dimitrijoski.jpg",
	},
	{
	  name: "Paulina Kiendys",
	  image: "images/students/paulina-kiendys.jpg",
	},
	{
	  name: "Raymond Lam",
	  image: "images/students/raymond-lam.jpg",
	},
	{
	  name: "Robin Karlsson",
	  image: "images/students/robin-karlsson.jpg",
	},
	{
	  name: "Sara Almqvist",
	  image: "images/students/sara-almqvist.jpg",
	},
	{
	  name: "Tim Nilsson",
	  image: "images/students/tim-nilsson.jpg",
	},
	{
	  name: "Tirapat Sukjit",
	  image: "images/students/tirapat-sukjit.jpg",
	},
	{
	  name: "Tobias Silfverberg",
	  image: "images/students/tobias-silfverberg.jpg",
	},
	{
	  name: "Wiktoria Dobrzewinska",
	  image: "images/students/wiktoria-dobrzewinska.jpg",
	},
  ];

// The variables
const studentEl = document.querySelector("#imgStudent");
const choiceEl = document.querySelector(".choiceButton");
const resultEl = document.querySelector("#result");
const restartEl = document.querySelector("#restart");
const highscoreEl = document.querySelector("#highscore");
const scoreboxEl = document.querySelector(".scorebox"); 
const scoreEl = document.querySelector(".score");
const gameQuizEl = document.querySelector(".gameQuiz");

let currentStudent = "";
let guesses = 0;
let correctAnswers = 0;
let givenAnswers = [];
let highscore = 0;


// Shuffles the arrays (Fisher yates algorithm)
const shuffleStudents = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// Remove students from the array "students" that wont make you guess on the same person twice
const removeItemOnce = (array, value) => {
	var index = array.indexOf(value);
	if (index > -1) {
	  array.splice(index, 1);
	}
	return array;
  };

  // The function for taking out the students for the round and adds the image on the student and the four buttens
const getStudent = () => {
	shuffleStudents(students);

	// This will pick out 4 students in a new arrat
	const chosenStudents = students.slice(0, 4);

	// This is a variable for student on display/ the correct answer
	currentStudent = students[0];
	// Puts in a image in the HTML file
	studentEl.src = currentStudent.image;

	// This will shuffle anathor four students again to make the quiz harder so it wont be as easier to figure out a pattern
	shuffleStudents(chosenStudents);
	choiceEl.innerHTML = "";

	// Making a new array and picking out names from students and saves them in the new one
	const chosenStudentsName = chosenStudents.map((student) => student.name);

	// Placing the students names in buttons
	chosenStudentsName.forEach((studentName) => {
		choiceEl.innerHTML += `<button class="btn btn-lg btn-outline-warning text-center m-2" type="submit">${studentName}</button>`;
	});
};

// The game will start from here
getStudent();

// A function to track the amount CORRECT guesses and making a new array then pushing it in
const correctChoice = (studentObj) => {
	// Doing all the stuff that are related to the users' CORRECT choice
	givenAnswers.push(studentObj);
	resultEl.innerHTML = `<p class="correct answer">RÄTT SVAR 🎊</p>`;
	// Adding one score per correct answer
	correctAnswers++;
	getStudent();
};

// A function to track the amount INCORRECT guesses and making a new array then pushing it in
const incorrectChoice = (studentObj) => {
	// Doing all the stuff that are related to the users' incorrect choice
	givenAnswers.push(studentObj);
	resultEl.innerHTML = `<p class="wrong answer">FEL SVAR 🚨</p>`;
	getStudent();
};

// Click event for buttons with students
choiceEl.addEventListener("click", (e) => {
	// Function that scrolls up to the top of the page
	scrollTo(0, 0);
	if (e.target.tagName === "BUTTON") {
		// Adding one on each guess
		guesses++;
		
		let studentObj = {
			name: currentStudent.name,
		};

		// If statement divides correct and incorrect answers
		//
		if (e.target.innerText === currentStudent.name) {
			studentObj.correct = true;
			correctChoice(studentObj);
		} else {
			studentObj.correct = false;
			incorrectChoice(studentObj);
		}

		// Showing your result after 15 guesses
		if (guesses === 15) {
			showResult();
			newRound();
		}
	}
});



const showResult = () => {
	// This will check if you got a new highscore
	if (correctAnswers > highscore) {
		highscoreEl.innerHTML = `<p class="highscore display-6 text-secondary">Ditt nya rekord är: ${correctAnswers}</p>`;

		highscore = correctAnswers;
	} else {
		highscoreEl.innerHTML = `<p class="highscore display-6 text-secondary">Inget nytt rekord den här rundan!</p>`;
	}

	// Will show you the result after guessing students
	scoreEl.querySelector("span").textContent = `${correctAnswers}/${guesses}`;
	scoreEl.classList.remove("d-none");
	resultEl.innerText = "Vill du försöka igen?";
	gameQuizEl.classList.add("d-none");
};

// Another round button resets all stats execpt highscore
// This is the reset button that will reset everything in the quiz except the highscore
const newRound = () => {
	restartEl.classList.remove("d-none");
	restartEl.addEventListener("click", () => {
		highscoreEl.innerHTML = `<p class="highscore display-6 text-center text-secondary">Ditt nuvarande rekord är: ${highscore}</p>`;
		scoreEl.classList.add("d-none");
		resultEl.innerText = "";
		guesses = 0;
		correctAnswers = 0;
		givenAnswers = [];
		restartEl.classList.add("d-none");
		gameQuizEl.classList.remove("d-none");
		getStudent();
	});
};
