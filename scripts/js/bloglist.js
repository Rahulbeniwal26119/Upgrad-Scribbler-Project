var model = document.getElementById("delete-modal");
var deleteButton = document.getElementsByClassName("delete");
var deleteModal = document.getElementById("delete-modal");

(function () {
    for (var i = 0; i < deleteButton.length; i++)
        deleteButton[i].addEventListener('click', showDeleteModal);
})();



var hideDeleteModal = document.getElementById("no-delete");

function showDeleteModal() {
    model.style.display = "block";
}

hideDeleteModal.addEventListener("click", hideModal);
function hideModal() {
    try {
        deleteModal.style.display = "none";
    }
    catch (e) {

    }
}

var buttonClicked = {};
for (var i = 0; i <= 4; i++) {
    buttonClicked[`button${i}`] = document.getElementById(`more${i + 1}`);
}

var j = 0;
function fetchData1() {
    index = 1;
    var posttitle = document.getElementById(`title` + index).innerHTML;
    var authorName = document.getElementById(`authorname` + index).innerHTML;
    var postContent = document.getElementById(`postcontent` + index).innerHTML;
    document.cookie = `authorname=${authorName}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    localStorage.setItem("title", posttitle);
    localStorage.setItem("postcontent", postContent);

}
function fetchData2() {
    var index = 2;
    var posttitle = document.getElementById(`title` + index).innerHTML;
    var authorName = document.getElementById(`authorname` + index).innerHTML;
    var postContent = document.getElementById(`postcontent` + index).innerHTML;
    document.cookie = `authorname=${authorName}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    localStorage.setItem("postcontent", postContent);
    localStorage.setItem("title", posttitle);


}
function fetchData3() {
    var index = 3;
    var posttitle = document.getElementById(`title` + index).innerHTML;
    var authorName = document.getElementById(`authorname` + index).innerHTML;
    var postContent = document.getElementById(`postcontent` + index).innerHTML;
    document.cookie = `authorname=${authorName}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    localStorage.setItem("postcontent", postContent);
    localStorage.setItem("title", posttitle);


}
function fetchData4() {
    var index = 4;
    var authorName = document.getElementById(`authorname` + index).innerHTML;
    var postContent = document.getElementById(`postcontent` + index).innerHTML;
    document.cookie = `authorname=${authorName}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    localStorage.setItem("postcontent", postContent);
    localStorage.setItem("title", posttitle);



}
function fetchData5() {
    let index = 5;
    var posttitle = document.getElementById(`title` + index).innerHTML;
    var authorName = document.getElementById(`authorname` + index).innerHTML;
    var postContent = document.getElementById(`postcontent` + index).innerHTML;
    document.cookie = `authorname=${authorName}; expires=Thu, 18 Dec 2021 12:00:00 UTC`;
    localStorage.setItem("postcontent", postContent);
    localStorage.setItem("title", posttitle);


}
buttonClicked.button0.addEventListener("click", fetchData1);
buttonClicked.button1.addEventListener("click", fetchData2);
buttonClicked.button2.addEventListener("click", fetchData3);
buttonClicked.button3.addEventListener("click", fetchData4);
buttonClicked.button4.addEventListener("click", fetchData5);
