function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let intervalID;
const body = document.querySelector("body")
let startbutton = document.getElementById("start").addEventListener("click" , function(event){
    if(!intervalID){
        intervalID = setInterval(()=>{
            body.style.backgroundColor = getRandomRGB()
        },100);
    }
})
let stopbutton = document.getElementById("stop").addEventListener("click" , function(event){
    clearInterval(intervalID);
    intervalID = null;
})
