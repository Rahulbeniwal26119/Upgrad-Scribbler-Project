var signInButton = document.getElementById("signin");
const closeButton = document.getElementsByClassName("close")[0];
var signinModel = document.getElementById("signinModal");

function showModel() {
    var signinModel = document.getElementById("signinModal");
    signinModel.style.display = "block";
    console.log("clicked");
}

signInButton.addEventListener("click", showModel);



function hideModal() {
    signinModel.style.display = "none";
}

closeButton.addEventListener("click", showModel);
closeButton.onclick = hideModal;

window.onclick = function (event) {
    if (event.target == signinModel)
        signinModel.style.display = "none";
}