

// setInterval(()=>{
//     sec.innerHTML=new Date().getSeconds();
//     ho.innerHTML=new Date().getHours();
//     min.innerHTML=new Date().getMinutes();

// },1000)
let ho=document.getElementById("htime");
let min=document.getElementById("mtime");
let sec=document.getElementById("stime");
let pmam=document.getElementById("pmam")
updateclock();
// Function type1
function updateclock(){
    h=new Date().getHours();
m=new Date().getMinutes();
s=new Date().getSeconds();
pmam.innerHTML="AM"
  
    // only once output will occur  1sec

    if(h>12){
        pmam.innerHTML="PM"
    }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;
    
    sec.innerHTML=s;
ho.innerHTML=h;
min.innerHTML=m;

        setTimeout(()=>{
         updateclock();
            },1000);
}
    
    // output will occur every 1sec interval
//     setInterval(()=>{
//     updateclock();
// },1000)
