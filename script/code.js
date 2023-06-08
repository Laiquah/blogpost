const table = document.querySelector("tbody");

const deleteBtn = document.querySelector("#dltButton");
const add = document.querySelector("#addButton");
let tableRow = document.querySelector("#trow");

const saveBtn = document.getElementById("saveBtn");

let featuredPosts = [
  {
    id: "",
    title: "",
    author: "",
    imageURL: "",
    description: "",
    content: "",
    date: new Date(),
  },
];
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let description = document.querySelector(".desc");
let content = document.querySelector(".content");
let date = document.querySelector(".date");
let image = document.querySelector(".image");

let modal = document.querySelectorAll("#modalContainer");
const editButton = document.getElementById("edit");

editButton.addEventListener("click", () => {
  console.log("REACHED");
  modal.style.display = "block";
});
