const btn = document.querySelector(`.btn`);



btn.addEventListener(`click`, () => {
    btn.style.backgroundColor = `#fa120a`;
    btn.style.boxShadow = `0 0 50px #fa120a`;
    btn.style.transition = `.8s ease `;
    btn.textContent = "template opened..";
    btn.text.transition = ".6s ease"
});

