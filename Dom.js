
function cambiacolore() {
    let paragrafi = document.getElementsByTagName("p")
    for (let i = 0; i < paragrafi.length; i++) {
        let coloreRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);
        paragrafi[i].style.color = coloreRandom;
    }

}


function grassetto() {
    let paragrafi = document.getElementsByTagName("p")
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontWeight = "900";
    }

}

function visibilita() {
    let paragrafi = document.getElementsByTagName("p")
    for (let i = 0; i < paragrafi.length; i++) {


        if (paragrafi[i].style.display === "none") {

            paragrafi[i].style.display = "block"

        } else {
            paragrafi[i].style.display = "none"
        }
    }

}




