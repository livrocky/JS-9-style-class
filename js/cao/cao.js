//1. H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

// const titleEl = document.querySelector(".name");
// titleEl.addEventListener("click", () => {
//   titleEl.style.color = "red";
//   titleEl.style.fontSize = "100px";
//   titleEl.style.textAlign = "center";
// });

//2. Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.
//
//
//3. Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle. (NEGRIZTA ATGAL TIK)

const movingBtnEl = document.querySelector("button");
movingBtnEl.addEventListener("click", () => {
  movingBtnEl.classList.toggle("movingBtnBottomRight");
  movingBtnEl.classList.toggle("rotated");
});

//4. Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du simboliai - puslapio fonas žalias.