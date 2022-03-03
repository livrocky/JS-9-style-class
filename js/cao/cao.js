//1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

const titleEl = document.querySelector(".name");
titleEl.addEventListener("click", () => {
  titleEl.classList.toggle("name");
  // titleEl.style.color = "red";
  // titleEl.style.fontSize = "100px";
  // titleEl.style.textAlign = "center";
});

//2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.
//
//
//3. Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle. (NEGRIZTA ATGAL TIK)

const movingBtnEl = document.querySelector("button");
movingBtnEl.addEventListener("click", () => {
  movingBtnEl.classList.toggle("movingBtnBottomRight");
  movingBtnEl.classList.add("rotated");
});

//4. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.

const inputTextEl = document.getElementById("text");
const bodyEl = document.querySelector("body");

inputTextEl.addEventListener("input", () => {
  const inputText = inputTextEl.value.length;
  if (inputText <= 2) {
    bodyEl.style.backgroundColor = "tomato";
  } else if (inputText > 2) {
    bodyEl.style.backgroundColor = "green";
  }
});

//5. Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

const colorArr = ["red", "green", "blue", "yellow"];
const randomColorBtn = document.getElementById("randomColorBtn");

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

randomColorBtn.addEventListener("click", () => {
  let randomNumber = getRandomNumber(0, colorArr.length - 1);
  bodyEl.style.backgroundColor = colorArr[randomNumber];
});

//6. Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.
