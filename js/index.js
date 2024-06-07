
/******* Home ********/
const dropdownTwo = document.getElementById('dropdownTwo');
const ulTwo = document.getElementById('ulTwo');
const aClick = document.getElementById("a-click");
const iDeg = document.getElementById("iDeg");
const iDegTwo = document.getElementById("iDegTwo");
dropdownTwo.addEventListener('mouseenter', () => {
    ulTwo.classList.remove('d-none')
    iDegTwo.classList.remove("bi-chevron-left");
    iDegTwo.classList.add("bi-chevron-down");
})
ulTwo.addEventListener('mouseleave', () => {
    ulTwo.classList.add("d-none");
    iDegTwo.classList.add("bi-chevron-left");
    iDegTwo.classList.remove("bi-chevron-down");
})
/* دى بتحل مشكلة انى حتى لو عملت كليك على اللينك دا ميقفلش ال dropdown*/
 dropdownTwo.addEventListener("click", (event) => {
   event.preventDefault();
   event.stopPropagation();
   ulTwo.classList.toggle("d-none");
   iDegTwo.classList.toggle("bi-chevron-left");
   iDegTwo.classList.toggle("bi-chevron-down");
 });

document.addEventListener('click', () => {
    if (aClick.classList.contains('show')) {
        iDeg.classList.remove('bi-chevron-left')
        iDeg.classList.add("bi-chevron-down");
    } else {
        iDeg.classList.add("bi-chevron-left");
        iDeg.classList.remove("bi-chevron-down");
    }
 })


 const aClickLg=document.getElementById('a-click-lg')
const iDegLg = document.getElementById('iDeg-lg')
const dropdownmenuId = document.getElementById("dropdown-menuId");
aClickLg.addEventListener('mouseenter', () => {
     iDegLg.classList.remove("bi-chevron-left");
    iDegLg.classList.add("bi-chevron-down");
    // iDegLg.style.backgroundColor = "#F0F5FF";
})
dropdownmenuId.addEventListener("mouseleave", () => {
    iDegLg.classList.remove("bi-chevron-down");
  iDegLg.classList.add("bi-chevron-left");
  // iDegLg.style.backgroundColor = "transparent";
});
//search 
let parent = document.getElementById("parent");
let son = document.getElementById("son");
let icona = document.getElementById("icona");
 son.addEventListener("focus", function () {
   parent.style.cssText = `
  transition:0.3s;
  color: #212529;
    background-color: #fff;
    border-color: #d99c39;
    box-shadow: 0 0 0 0.25rem #0564fb47;
  `;
 });
 son.addEventListener("blur", function () {
   parent.style.cssText = `
  transition:0.3s;
  color: none;
    background-color: none;
    border-color: none;
    box-shadow:none;
  `;
 });
 //حركة كدا في السيرشاية
son.style.cssText = `
max-width:0;
transition: 0.3s;
`;
icona.style.cursor = "pointer";
icona.addEventListener("click", function () {
    son.style.maxWidth = "150px";
  son.focus();
});
son.addEventListener("blur", function () {
    this.style.maxWidth = "0";
 })

//beginning
const nav=document.getElementById('nav')
const beginning = document.getElementById("beginning");
beginning.style.marginTop = nav.offsetHeight + 'px'

const colImg = document.getElementById('col-img')
