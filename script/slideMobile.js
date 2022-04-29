let count = 1;
document.getElementById("radio1").checked = true;

let tagTitle = document.getElementById("tagTitle")
let title = document.getElementById("title")

const slideInterval = setInterval( function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

    

    if(count === 1 || count === 3) {
        tagTitle.innerHTML = "HUMANO VIRTUAL"
        title.innerHTML = "Conheça o Papai Noel Virtual desenvolvido pela PlanXP"
        document.getElementById("blockBox").src="./imagens//mobile/blockBorder1.png"
    }
    if(count === 2 || count === 4) {
        tagTitle.innerHTML = "DHL"
        title.innerHTML = "Treinamento em realidade virtual na DHL"
        document.getElementById("blockBox").src="./imagens//mobile/blockBorder2.png"
    }

}

function openSlide1() {
    tagTitle.innerHTML = "HUMANO VIRTUAL"
    title.innerHTML = "Conheça o Papai Noel Virtual desenvolvido pela PlanXP"
    document.getElementById("blockBox").src="./imagens//mobile/blockBorder1.png"

    clearInterval(slideInterval)
}

function openSlide2() {
    tagTitle.innerHTML = "DHL"
    title.innerHTML = "Treinamento em realidade virtual na DHL"
    document.getElementById("blockBox").src="./imagens//mobile/blockBorder2.png"

    clearInterval(slideInterval)

}