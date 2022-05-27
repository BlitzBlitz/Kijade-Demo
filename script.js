let linksContainer = document.querySelectorAll(".side-links")[0];
let skillsLocations = [
  "m/عرض - الاستراتيجية الشخصية.pdf",
  "m/عرض - القبعات الست.pdf",
  "m/عرض - قيادة الأولويات.pdf",
  "m/عرض - معايير فريق العمل.pdf",
  "m/عرض التأثير والإقناع.pdf",
  "m/عرض القيادة الأخلاقية.pdf",
  "m/عرض القيادة الموقفية.pdf",
  "m/عرض برنامج تريز.pdf",
  "m/عرض تقدير الذات.pdf",
  "m/عرض قيادة المشروع.pdf",
  "m/أساسيات فريق العمل .pdf",
  "m/المبادرة لموقف قيادي.pdf",
  "m/قيادة الوقت.pdf",
  "m/مشروعي القيادي.pdf",
  "m/مهارات التواصل.pdf",
  "m/مهارات سكامبر.pdf",
];

for (let i = 0; i < skillsLocations.length; i++) {
  let link = document.createElement("a");
  link.classList.add("side-link");
  if (i == 0) {
    link.classList.add("active");
  }
  link.href = "#";
  link.innerHTML = skillsLocations[i].slice(2).split(".")[0];
  link.addEventListener("click", function () {
    let current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add("active");
    let pdf = document.querySelector("#player");
    pdf.src = skillsLocations[i];
    console.log(1);
  });
  linksContainer.appendChild(link);
}
console.log(linksContainer.childNodes);
