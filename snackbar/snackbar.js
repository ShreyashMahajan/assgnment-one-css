let toastBaseline = document.querySelector(".toast--baseline");
let toastLeading = document.querySelector(".toast--leading");
let toastStacked = document.querySelector(".toast--stacked");
let snackbarText = document.querySelector("#snackbar");
let snackbarStacked = document.querySelector("#snackbar--stacked")

toastBaseline.addEventListener('click', () => {
   
   snackbarText.className = "show-baseline";
   setTimeout( () =>
    snackbarText.className = snackbarText.className.replace('show-baseline', ''), 3000);
});

toastLeading.addEventListener('click', () => {
   
    snackbarText.className = "show-leading";
    setTimeout( () =>
     snackbarText.className = snackbarText.className.replace('show-leading', ''), 3000);
 });

 toastStacked.addEventListener('click', () => {
   
    snackbarStacked.className = "show-stacked";
    setTimeout( () =>
    snackbarStacked.className = snackbarStacked.className.replace('show-stacked', ''), 3000);
 });