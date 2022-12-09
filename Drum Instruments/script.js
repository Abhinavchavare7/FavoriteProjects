const instEl=["Snare","Kick","Crash","Tom"]

const instrumnentEl=document.querySelector(".instruments")

instEl.forEach((kit)=>{
const btnEl=document.createElement("button")
    instrumnentEl.appendChild(btnEl)
    btnEl.innerText=kit
    btnEl.style.backgroundImage="url"+"(./"+ kit+ ".png)"

     const audioEl=document.createElement("audio")
     instrumnentEl.appendChild(audioEl)
    //  videoEl.innerHTML="url"+"(./"+ kit+ ".png)"
    audioEl.src="./"+kit+".mp3";

   
btnEl.addEventListener("click",(kit)=>{
    audioEl.play();
})
window.addEventListener("keydown",(ene)=>{
    if (ene.key== kit.slice(0,1))
    {
        audioEl.play();
        btnEl.style.transform= "scale(1.2)"
console.log("abhinav")
setTimeout(()=>{
    btnEl.style.transform= "scale(1)"
},100)
    }
    
})
console.log(kit.slice(0,1))
})