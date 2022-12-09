const containerE=document.querySelector(".container")

function genCont(){
    for(let i=0;i<10;i++){
const contE=document.createElement("div")

let codeis=gencolorid()
contE.insertAdjacentHTML("afterbegin","<h2>"+"#"+codeis)

contE.classList.add("content")
containerE.appendChild(contE)
contE.style.backgroundColor="#"+codeis

}
}
genCont()

function gencolorid(){
    let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    let aee=[];
for(let j=0;j<6;j++){
    let mat=Math.floor(Math.random()*16)
  aee.push(arr.slice(mat,mat+1),)
}
return aee.join("")
}

