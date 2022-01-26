let btnTabList = document.querySelectorAll(".btn__tab");
let tabText = document.querySelector(".tab__text");

let borderBottomActive = false;

btnTabList.forEach( tabelement => tabelement.addEventListener('click', () => {
    if( borderBottomActive === false){
        tabelement.style.borderBottom = "1px solid black";
        borderBottomActive = true;
    }else {
        tabelement.style.borderBottom = "none";
        borderBottomActive = false;
    }
}) )

