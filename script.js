const button1 = document.getElementById("myButton")
const button2 = document.getElementById("myButton2")
let copyDiv = document.querySelector(".copyCode")
let rgb1 = "#004773";
let rgb2 ="#54d542";

//generate hex values
const hexValues=()=>{
let myHexValues= "0123456789abcdef";
let colors ="#"
for(let i=0; i<6; i++){
//0-15
colors = colors + myHexValues[Math.floor(Math.random() * 16)]
}
return colors;
}

//on clicking button1
const handleButton1 =() => {
 rgb1 = hexValues()
 button1.innerText=rgb1;
document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2}`
copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
button1.innerHTML=rgb1
}

//on clicking button2
const handleButton2 =() => {
 rgb2 = hexValues()
 button2.innerText=rgb2;
document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2}`
copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
button2.innerHTML=rgb2
}


copyDiv.addEventListener("click",()=>{
navigator.clipboard.writeText(copyDiv.innerHTML)
})


button1.addEventListener('click' , handleButton1)
button2.addEventListener('click' , handleButton2)

