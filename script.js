const openBtn = document.querySelector(".card-container");

openBtn.onclick = function () {
    document.body.classList.toggle("open");
    generateCard();
};