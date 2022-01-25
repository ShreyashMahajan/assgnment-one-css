let buttonToggle = document.querySelector(".btn--toggle");
let toggleBadge = document.querySelector(".toggle__content");

let isToggle = true;

buttonToggle.addEventListener("click", () => {
    if( isToggle === true){
        toggleBadge.style.display = "none";
        isToggle = false;
    }else {
        toggleBadge.style.display = "initial";
        isToggle = true;
    }
     
})

