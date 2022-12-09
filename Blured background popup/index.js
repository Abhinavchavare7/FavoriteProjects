const containerEl=document.querySelector(".container")
const popconEl=document.querySelector(".pop-con")
const btnEl =document.querySelector(".btn")
const icontimeEl=document.querySelector(".icontime")
const popupEl=document.querySelector(".pop-up")
const mailEl=document.querySelector("#mail")
const passwordEl=document.querySelector("#password")

btnEl.addEventListener('click',()=>{
    containerEl.classList.add("active");
    popconEl.classList.remove("active")
})
icontimeEl.addEventListener('click',()=>{
    containerEl.classList.remove("active");
    popconEl.classList.add("active")
})
popupEl.addEventListener('click',()=>{
    if(mailEl.value=="abhinavchavare7@gmail.com"){
     if( passwordEl.value="9921899345")  {
        location.href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/?original_referer=' ;
        mailEl.value=" ";
     }
    }
    else{
        alert("invalid Email id")
    }
  
   
})

