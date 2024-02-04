const emojis = [
"🐱‍🐉",
"🐱‍🐉",
"🐺",
"🐺",
"🐮",
"🐮",
"🦝",
"🦝",
"🐨",
"🐨",
"🐸",
"🐸",
"🐴",
"🐴",
"🐲",
"🐲"
];
let openCards = [];

let sortearCards = emojis.sort(()=>(Math.random() > 0.5 ? 2: -1 ));

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item"
    box.innerHTML = sortearCards[i];
    box.onclick = handclick;
    document.querySelector(".game").appendChild(box)
}
 
function handclick(){
if( openCards.length < 2 ){
    this.classList.add("boxOpen");
    openCards.push(this);
}
if(openCards.length===2){
    setTimeout(() => {
        check();
    }, 500);
}

}

function check() {
    if (openCards.length === 2) {
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            openCards[0].classList.add("boxMacth");
            openCards[1].classList.add("boxMacth");
        } else {
            openCards[0].classList.remove("boxOpen");
            openCards[1].classList.remove("boxOpen");
        }
        openCards = [];
        if (document.querySelectorAll(".boxMacth").length === emojis.length) {
            alert("Você venceu");}
    }
    
}
