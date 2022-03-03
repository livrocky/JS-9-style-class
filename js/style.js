console.log(`styl.js is online`);

const h1El = document.querySelector("h1");
console.log(`h1El ===`, h1El);

const textEl = document.querySelector(`.text`);
textEl.style.color = "tomato";

// uzdedam borderi, ir padinga is visu pusiu 20px ir inlineblock

// <h2 class="title">Card title</h2>
// pakeiciam fonto storis normal, font size 35px, border bottom 2px solid black

const cardEl = document.querySelector(".card");
cardEl.style.padding = "20px";
cardEl.style.display = "inline-block";

// H2//

const cardTitle = document.querySelector(".title");
cardTitle.style.fontWeight = "normal";
cardTitle.style.fontSize = "35px";
cardTitle.style.borderBottom = "2px solid black";

//UL//

// const list = document.querySelector(".my-list");
// list.firstElementChild.style.fontSize = "35px";
// list.nth-child(2).style.fontSize = "35px";
// list.lastElementChild.style

const ulEl = document.querySelector(`.my-list`);
//pirmas el
console.log(`ulEl ===`, ulEl.children[0]);

//gaunam masyva kuriame yra visi musu el elementai

const liElArrayLike = document.querySelectorAll(`.my-list li`);
console.log((`liElArray ===`, liElArrayLike));
liElArrayLike[1].style.color = "blue";

// pakeisti dvigubai padidinti pirmo el fonto dydi
const dabartinisDydis = (liElArrayLike[0].style.fontSize = "2rem");

// pakeisti dvigubai padidinti pirmo el fonto dydi
// praplesti tarpus tarp raidziu antram el iki 5px
// treciam el uzdeti juoda fona ir balta fonto spalva

//nustatyti fonta iki 100px paspaudus mygtuka

const btnEl = document.getElementById("didinti");
const btnEl2 = document.getElementById("mazinti");

btnEl.addEventListener("click", () => {
  h1El.style.fontSize = "100px";
});

btnEl2.addEventListener("click", () => {
  const dabartinisDydis = h1El.style.fontSize;
  console.log("dabartinisDydis ===", dabartinisDydis);
  const dabartinioDydzioSkReiksme = dabartinisDydis.replace("px", "");
  const naujaPamazintaSkReiksme = dabartinioDydzioSkReiksme - 10;
  h1El.style.fontSize = naujaPamazintaSkReiksme + "px";
});

//<input id="fonas" type="text" placeholder="Pasikeiskite fono spalva" /> PASIDARYTI!!!
