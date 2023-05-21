const feelingLuckyBtn = document.querySelector("#feeling-lucky-btn");

feelingLuckyBtn.addEventListener("click", () => {
    const catGif = document.querySelector("#cat-gif");
    catGif.style.display = "block";
    catGif.src = `https://cataas.com/cat/gif?${new Date().getTime()}`;
});