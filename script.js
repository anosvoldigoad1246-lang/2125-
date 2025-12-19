/* TYPEWRITER */
const msg = `
Sadia…
Tum meri zindagi ka wo hissa ho
jiske bina sab kuch adhoora lagta hai.

Main tumse sirf pyaar nahi karta,
main tumhe apni zindagi maanta hoon ❤️
`;

let i=0;
function type(){
  if(i<msg.length){
    document.getElementById("type").innerHTML += msg.charAt(i);
    i++;
    setTimeout(type,45);
  }
}
type();

/* SLIDESHOW */
let pics=["photo1.jpg","photo2.jpg"];
let index=0;
setInterval(()=>{
  index=(index+1)%pics.length;
  document.getElementById("slide").src=pics[index];
},3000);

/* MUSIC */
function playAll(){
  document.getElementById("bgm").play();
}

/* HEART GENERATOR */
const heartBox=document.querySelector(".hearts");
setInterval(()=>{
  const heart=document.createElement("span");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*3)+"s";
  heartBox.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},200);
