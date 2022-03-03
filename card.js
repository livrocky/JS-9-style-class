const cardEl = document.querySelector(".card");
const btnEl = document.getElementById("button");
const btnEl2 = document.getElementById("button2");
const checkBoxEl = document.getElementById("nightMode");

const cardEl1 = document.querySelector(".card1");
const btnEls = document.getElementById("1button");
const btnEl2s = document.getElementById("1button2");
const checkBoxEls = document.getElementById("1nightMode");

//0 KORTELE//
//buttons//

btnEl.addEventListener("click", () => {
  cardEl.style.backgroundColor = "black";
  cardEl.style.color = "white";
});

btnEl2.addEventListener("click", () => {
  cardEl.style.backgroundColor = "white";
  cardEl.style.color = "black";
});

//checkbox//

checkBoxEl.addEventListener("change", () => {
  const checkedBox = checkBoxEl.checked;
  if (checkedBox != 0) {
    cardEl.style.backgroundColor = "black";
    cardEl.style.color = "white";
  } else if (!checkedBox) {
    cardEl.style.backgroundColor = "white";
    cardEl.style.color = "black";
  }
});

//1 KORTELE//

btnEls.addEventListener("click", () => {
  cardEl1.style.backgroundColor = "black";
  cardEl1.style.color = "white";
});

btnEl2s.addEventListener("click", () => {
  cardEl1.style.backgroundColor = "white";
  cardEl1.style.color = "black";
});

//checkbox//

checkBoxEls.addEventListener("change", () => {
  const checkedBox1 = checkBoxEls.checked;
  if (checkedBox1 != 0) {
    cardEl1.style.backgroundColor = "black";
    cardEl1.style.color = "white";
  } else if (!checkedBox1) {
    cardEl1.style.backgroundColor = "white";
    cardEl1.style.color = "black";
  }
});

// prisideti mygtuka kuris paslepia arba rodo visas korteles //

const goneBtnEl = document.getElementById("disappear");
goneBtnEl.addEventListener("click", () => {
  const goneBtn = goneBtnEl.clicked;
  if (goneBtn != 0) {
    cardEl.style.display = "none";
    cardEl1.style.display = "none";
  } else if (!goneBtn) {
    cardEl.style.display = "block";
    cardEl1.style.display = "block";
  }
});

//pasiziurek onclick function , db dingsta bet neatsiranda//
