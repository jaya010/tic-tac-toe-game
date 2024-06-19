let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let newgamebtn= document.querySelector("#new-button");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winpatterns=[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]

]

boxes.forEach ((box )=>{
box.addEventListener( "click" , () =>{
    console.log("box was clicked");

    if (turnO){
        box.innerText="O";
        turnO=false
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled = true;

    checkWinner();
}
);

}
);
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner =(winner)=> {
    msg.innerHTML='congratulation!, winner is'; $(Winner);
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkWinner=() =>{
    for ( let pattern of winpatterns){
 let pos1Val = boxes[pattern[0]].innerHTML;
 let pos2Val = boxes[pattern[1]].innerHTML;
 let pos3Val = boxes[pattern[2]].innerHTML;


if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
if(pos1Val === pos2Val && pos2Val === pos3Val ){
console.log("WINNER!", pos1Val);
showWinner(pos1Val);

}}

}};