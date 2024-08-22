const myTitle = document.querySelector(".first-title");
const myWords = document.querySelector(".words");
const mybox = document.querySelector(".box");
const mybtn = document.querySelector(".btn");
const mybtn2 = document.querySelector(".btn-2");
const myimages = document.querySelector(".images");

const information = {
  title: "My information",
  name: "Hasanxon",
  age: 15,
  from: "Uzbekistan",
  school: 29,
  favourite: "Listen to music",
  hobby: "play football , reading books",
};

myTitle.innerHTML = information.title;
myWords.innerHTML = `Hi , My name is ${information.name}. I'm ${information.age} years old. I'm from ${information.from} and I study in the ${information.school}-school.My favourite ${information.favourite} and my hobby is ${information.hobby}👍`;

mybtn.addEventListener("click", () => {
  mybox.style.display = "block";
  mybtn2.style.display = "block";
  mybtn.style.display = "none";
  myimages.style.display = "none";
});

mybtn2.addEventListener("click", () => {
  mybtn2.style.display = "none";
  mybtn.style.display = "block";
  mybox.style.display = "none";
  myimages.style.display = "block";
});
