const array = [
  {
    image: "/images/image-tanya.jpg",
    statement:
      " “I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”",
    name: "Tanya Sinclair",
    designation: "UX Desinger",
  },
  {
    image: "/images/image-john.jpg",
    statement:
      "“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
    name: "John Tarkpor",
    designation: "Junior Front-end Developer",
  },
];

const image = document.querySelector(".hero__container--display");
const imageDisplay=image.querySelector(".hero__container--display--image")
const button=document.querySelector(".hero__container--button")
const prevButton = button.querySelector(".prev--button");
const nextButton = button.querySelector(".next--button");
const author = document.querySelector(".hero__statement");
const authorStmt = author.querySelector(".hero__statement--des");
const authorName = author.querySelector(".hero__statement--author");
const authorDesig = author.querySelector(".hero__statement--designation");
let current = 0;
const show = (current) => {
  imageDisplay.src = array[current].image;
  authorStmt.innerHTML = array[current].statement;
  authorName.textContent = array[current].name;
  authorDesig.textContent = array[current].designation;
};

window.addEventListener("DOMContentLoaded", () => {
    show(current);
  });
prevButton.addEventListener("click", () => {
  if (current !== 0) {
    current--;
    show(current);
  } 
});
nextButton.addEventListener("click", () => {
  if (current !== array.length - 1) {
    current++;
    show(current);
  }
});
