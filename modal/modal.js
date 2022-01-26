let btnAction = document.querySelectorAll(".btn--action");
let modalDelete = document.querySelector(".modal__delete");
let btnShowModal = document.querySelector(".btn__modal");
let modalCard = document.querySelector(".modal-card");

let modalDeleteSimple = document.querySelector(".modal__delete--simple")
let btnShowModalSimple = document.querySelector(".btn__modal--simple");
let modalCardSimple = document.querySelector(".modal-simple");

let [btnActionOne, btnActionTwo] = btnAction;

let modalCardActive = false;
let modalCardActiveSimple = false;

function modalActive() {
    if( modalCardActive === false){
        modalCard.style.visibility = "visible";
        modalCardActive = true;
        document.body.style.backgroundColor = "rgb(185, 180, 180)";
    }else {
        modalCard.style.visibility = "hidden";
        modalCardActive = false;
        document.body.style.backgroundColor = "white"
    }
}

btnShowModal.addEventListener("click", () => {
    modalActive();
})

btnActionOne.addEventListener('click', () => {
    modalActive();
})

btnActionTwo.addEventListener('click', () => {
    modalActive();
})

modalDelete.addEventListener('click', () => {
    modalActive();
})

function modalActiveSimple() {
    if( modalCardActiveSimple === false){
        modalCardSimple.style.visibility = "visible";
        modalCardActiveSimple = true;
        document.body.style.backgroundColor = "rgb(185, 180, 180)";
    }else {
        modalCardSimple.style.visibility = "hidden";
        modalCardActiveSimple = false;
        document.body.style.backgroundColor = "white"
    }
}

modalDeleteSimple.addEventListener('click', () => {
   modalActiveSimple();
})

btnShowModalSimple.addEventListener('click', () => {
    if( modalCardActiveSimple === false){
        modalCardSimple.style.visibility = "visible";
        modalCardActiveSimple = true;
        document.body.style.backgroundColor = "rgb(185, 180, 180)";
    }else {
        modalCardSimple.style.visibility = "hidden";
        modalCardActiveSimple = false;
        document.body.style.backgroundColor = "white"
    }
})




