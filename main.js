// controle shft l multi select
const A = document.querySelector(".white1");
const Ah = document.querySelector(".black1");
const B = document.querySelector(".white2");
const C = document.querySelector(".white3");
const Ch = document.querySelector(".black2");
const D = document.querySelector(".white4");
const Dh = document.querySelector(".black3");
const E = document.querySelector(".white5");
const F = document.querySelector(".white6");
const Fh = document.querySelector(".black4");
const G = document.querySelector(".white7");
const Gh = document.querySelector(".black5");

const lance_son = (text) => {
  const audio = new Audio();
  audio.src = `sons/${text}.mp3`;
  audio.play();
};

let key;
document.addEventListener("keypress", (e) => {
  key = e.key;
  console.log(key);
  let keys = ["s", "e", "d", "r", "f", "g", "y", "h", "u", "j", "i", "k"];
  if (keys.includes(key)) {
    lance_son(key);
  }

  if (key === "e" || key === "E") {
    lance_son("ah3");
  }
});
