setTimeout(() => {

document.getElementById("loading").style.opacity = "0";

setTimeout(() => {

document.getElementById("loading").style.display = "none";

document.getElementById("main").style.opacity = "1";

document.getElementById("main").style.transform = "translateY(0)";

}, 1500);

}, 4500);

function updateClock() {

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("id-ID");

}

setInterval(updateClock, 1000);

updateClock();

const text = `
Hai Riska...

Kalau hari ini terasa berat,
izinkan dirimu beristirahat sejenak.

Namun jangan menyerah.

Kamu sudah melewati begitu banyak hal
yang dulu terlihat mustahil.

Setiap air mata,
setiap lelah,
dan setiap perjuanganmu...

sedang membentuk versi terbaik dari dirimu.

Tidak apa-apa berjalan pelan.

Asal jangan berhenti.

Karena masa depan sedang menyiapkan
hal-hal indah untukmu.

Tetap semangat.

Tetap kuat.

Tetap menjadi Riska yang luar biasa. 💙
`;

let i = 0;

function typeWriter() {

if(i < text.length){

document.getElementById("message").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter, 30);

}

}

setTimeout(typeWriter, 5000);

for(let i=0; i<120; i++){

let star = document.createElement("div");

star.className = "star";

let size = Math.random()*4 + 1;

star.style.width = size + "px";
star.style.height = size + "px";

star.style.left = Math.random()*100 + "%";

star.style.animationDuration =
(Math.random()*10 + 5) + "s";

document.querySelector(".stars")
.appendChild(star);

}

function secretMessage(){

document.getElementById("popup").style.display="block";

document.getElementById("popupText").innerHTML=
"Jika suatu hari kamu merasa sendirian, ingatlah bahwa masih ada seseorang yang percaya bahwa kamu mampu melewati semuanya. 💙";

}

function hug(){

document.getElementById("popup").style.display="block";

document.getElementById("popupText").innerHTML=
"⊂(･ω･*⊂)<br><br>Peluk virtual terkirim untuk Riska 💙<br><br>Kamu tidak harus kuat sendirian.";

}

const quotes = [

"Kamu lebih kuat dari yang kamu kira 💙",

"Jangan menyerah sekarang, perjalananmu belum selesai ✨",

"Besok bisa jadi hari terbaikmu 🌈",

"Setiap langkah kecil tetaplah kemajuan 💙",

"Orang hebat juga boleh beristirahat 🌟"

];

function motivate(){

document.getElementById("popup").style.display="block";

document.getElementById("popupText").innerHTML=
quotes[Math.floor(Math.random()*quotes.length)];

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
