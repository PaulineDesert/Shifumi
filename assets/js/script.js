let elementImg = document.querySelectorAll('img');
let battleButton = document.querySelector('button');
let idP = document.querySelector('p');
let choicePlayer;
let choiceIA;
let idA = document.querySelectorAll('a');

let pseudo = prompt(`Pseudo :`);

if (pseudo == null || pseudo == ``) {
    pseudo = `Vous`;
}

function resetImg(){
    elementImg[0].src = 'assets/img/ciseau.png';
    elementImg[1].src = 'assets/img/pierre.png';
    elementImg[2].src = 'assets/img/feuille.png';
}

elementImg.forEach( element => {
    element.onclick = function () {
        resetImg();
        element.src = element.dataset.src;
        choicePlayer = element.dataset.value;
    }
})

function getRandom() {
    let result = Math.floor(Math.random() * Math.floor(3));
    if (result == 0) {
        choiceIA = `ciseaux`;
        if (elementImg[0].src.match('assets/img/ciseauHover.png')) {
            resetImg();
            elementImg[0].src = 'assets/img/ciseauEgalite.png';
        } else {
            elementImg[0].src = 'assets/img/ciseauIA.png';
        }
    } else if (result == 1) {
        choiceIA = `pierre`;
        if (elementImg[1].src.match('assets/img/pierreHover.png')) {
            resetImg();
            elementImg[1].src = 'assets/img/pierreEgalite.png';
        } else {
            elementImg[1].src = 'assets/img/pierreIA.png';
        }
    } else if (result == 2) {
        choiceIA = `feuille`;
        if (elementImg[2].src.match('assets/img/feuilleHover.png')) {
            resetImg();
            elementImg[2].src = 'assets/img/feuilleEgalite.png';
        } else {
            elementImg[2].src = 'assets/img/feuilleIA.png';
        }
    }
}

let scorePlayer = 0;
let scoreIA = 0;

function noteScore() {
    idA[0].textContent = `${pseudo}`;
    idA[2].textContent = `${scorePlayer}`;
    idA[1].textContent = `IA`;
    idA[3].textContent = `${scoreIA}`;
    if (scorePlayer > scoreIA) {
        idA[0].style.color = 'blue';
        idA[2].style.color = 'blue';
        idA[1].style.color = 'black';
        idA[3].style.color = 'black';
    } else if (scorePlayer < scoreIA) {
        idA[1].style.color = 'red';
        idA[3].style.color = 'red';
        idA[0].style.color = 'black';
        idA[2].style.color = 'black';
    } else if (scorePlayer = scoreIA) {
        idA.forEach( element => {
            element.style.color = 'black'
        })
    }
}

function score() {
        if (choicePlayer == 'feuille' && choiceIA == 'pierre' || choicePlayer == 'pierre' && choiceIA == 'ciseaux' || choicePlayer == 'ciseaux' && choiceIA == 'feuille') {
            scorePlayer++;
            idP.textContent = `Gagné !`;
            idP.style.color = 'green';
            noteScore()
        } else if (choicePlayer == choiceIA) {
            idP.textContent = `Egalité`;
            idP.style.color = 'grey';
            noteScore()
        } else {
            scoreIA++;
            idP.textContent = `Perdu...`;
            idP.style.color = 'red';
            noteScore()
        }
}

battleButton.addEventListener('click', function () {
    getRandom();
    score()
})