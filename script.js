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

const studentEl = document.querySelector("#imgStudent");
const choiceEl = document.querySelector("#choiceButton");
const scoreEl = document.querySelector("#score");
const restartEl = document.querySelector("#restart");
const highscoreEl = document.querySelector("#highscore");

let currentStudent = "";


// Shuffles the arrays (Fisher yates algorithm)
const shuffleStudents = (array) => {
	for (let i = array-length - 1; 1 > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

//Remove students from the array "students" that wont make you guess on the same person twice
const removeItemOnce = (array, value) => {
	var index = array.indexOf(value);
	if (index > -1) {
	  array.splice(index, 1);
	}
	return array;
  };

  // function for picking out students for one round. Adds image and four buttons
const getStudent = () => {
	shuffleStudents(students);

	// picks out 4 students in new array
	const chosenStudents = students.slice(0, 4);

	// variable for student on display/correct answer
	currentStudent = students[0];
	// sets image in html
	studentEl.src = currentStudent.image;

	// shuffling the four students again for making it harder to figure out a pattern
	shuffleStudents(chosenStudents);
	choiceEl.innerHTML = "";

	// picks out names from students array and saves them in a new array
	const chosenStudentsName = chosenStudents.map((student) => student.name);

	// place names in buttons
	chosenStudentsName.forEach((studentName) => {
		choiceEl.innerHTML += `<button class="optionBtn btn btn-lg text-light text-center m-2">${studentName}</button>`;
	});
};
getStudent();