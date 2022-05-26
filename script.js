let links = document.querySelectorAll(".side-link");
let locations = [
  "m\\____أساسيات فريق العمل (1).pdf",
  "m\\__المبادرة لموقف قيادي.pdf",
];

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add("active");
    let pdf = document.querySelector("#player");
    pdf.src = locations[i];
  });
}
console.log(links);
