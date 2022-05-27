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
let hulasaLocation = [
  "الخلاصات/اعادة اختراع القيادة.pdf",
  "الخلاصات/الاستعداد_الذكي_للمستقبل.pdf",
  "الخلاصات/البديل_الثالث.pdf",
  "الخلاصات/التفكير_الإبداعي.pdf",
  "الخلاصات/الذكاء الوجداني.pdf",
  "الخلاصات/السلطة.pdf",
  "الخلاصات/العظمة.pdf",
  "الخلاصات/القيادة  من  الداخل.pdf",
  "الخلاصات/القيادة في وقت الازمات.pdf",
  "الخلاصات/القيادة وقت الأزمات.pdf",
  "الخلاصات/تعاليم_“بيتر_دراكر”.pdf",
  "الخلاصات/تلخيص-كتاب-21-قانونا-لا-يحمل-الجدل-في-القيادة.pdf",
  "الخلاصات/قوة التغيير.pdf",
  "الخلاصات/قيادة التغيير  خطة عمل من ثمان خطوات.pdf",
  "الخلاصات/كبسولات القيادة.pdf",
  "الخلاصات/من_طالب_إلى_قائد.pdf",
  "الخلاصات/وصفات جاك ويلش للقيادة.pdf",
];
let kutubLocation = [];
let mekatiLocation = [];
let categoriesNames = ["المهارات", "الكتب", "الخلاصات", "المقاطع"];

let linksContainer = document.querySelectorAll(".side-links")[0];
let categoryContainer = document.querySelectorAll(".navbar")[0];

displayCategories(categoriesNames);
displayItems(skillsLocations);

function displayCategories(categories) {
  for (let i = 0; i < categories.length; i++) {
    let category = document.createElement("a");
    category.classList.add("nav-link");
    if (i == 0) {
      category.classList.add("active-green");
    }
    category.href = "#";
    category.innerHTML = categories[i];
    category.addEventListener("click", function () {
      let current = document.querySelector(".active-green");
      current.classList.remove("active-green");
      this.classList.add("active-green");
      console.log(this.innerText);
      switch (this.innerText) {
        case "المهارات":
          displayItems(skillsLocations);
          break;
        case "الكتب":
          displayItems(kutubLocation);
          break;
        case "الخلاصات":
          displayItems(hulasaLocation);
          break;
        case "المقاطع":
          displayItems(mekatiLocation);
        default:
          break;
      }
    });
    categoryContainer.appendChild(category);
  }
}

function displayItems(items) {
  linksContainer.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    let link = document.createElement("a");
    link.classList.add("side-link");
    if (i == 0) {
      link.classList.add("active");
    }
    link.href = "#";
    link.innerHTML = items[i].split("/")[1].split(".")[0];
    link.addEventListener("click", function () {
      let current = document.querySelector(".active");
      current.classList.remove("active");
      this.classList.add("active");
      let pdf = document.querySelector("#player");
      pdf.src = items[i];
    });
    linksContainer.appendChild(link);
  }
  console.log(linksContainer.childNodes);
}
