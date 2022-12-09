const btnEl=document.querySelector("#btn")

const containerEl=document.querySelector(".container")
const vidconEl=document.querySelector(".vidcon")
const videoEl=document.querySelector("video")

const icontimeEl=document.querySelector(".icontime")

btnEl.addEventListener('click',()=>{
    containerEl.classList.add("active")
    vidconEl.classList.add("close")
    // console.log("Abhi")
})
icontimeEl.addEventListener('click',()=>{
    containerEl.classList.remove("active")
    vidconEl.classList.remove("close")
    videoEl.currentTime=0
})