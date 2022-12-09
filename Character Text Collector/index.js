const textE1=document.getElementById("text")
const totalcharE1=document.getElementById("total-char")
const remaincharE1=document.getElementById("remain-char")
textE1.addEventListener('keyup',()=>{
    updatecount();
    // console.log("Abhinav")
})
updatecount();
function updatecount(){
    // console.log(textE1.value.length)
totalcharE1.innerText=textE1.value.length;
remaincharE1.innerText=textE1.getAttribute("maxlength")-textE1.value.length;
}