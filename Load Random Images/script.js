const containerEl=document.querySelector(".container")

const btnEl=document.querySelector(".btn")
generateimg();
btnEl.addEventListener("click",()=>{
   generateimg();
})
function generateimg(){
    for(let i=0;i<10;i++){
        loadimg();
    }
}
function loadimg(){
    const images=document.createElement("img")
    containerEl.appendChild(images)
    images.src="https://picsum.photos/250?random="+Math.floor(Math.random()*98);
    let aa=Math.random()*97.51
    
    console.log(aa)
    console.log(Math.ceil(aa))
}