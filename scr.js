document.addEventListener("DOMContentLoaded", () => {
    const div1 = document.querySelector('.div1');
    const ask = document.querySelector('.ask');
    const yesB = document.querySelector('.yes');
    const noB = document.querySelector('.no');

    if (!div1 || !ask || !yesB || !noB) {
        console.error("One or more elements not found!");
        return;
    }

    const divR = div1.getBoundingClientRect();
    const noBRect = noB.getBoundingClientRect();

    yesB.addEventListener("click", () => {
        ask.innerHTML = "I Love You Too Sona:)";
        
    });

    noB.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (divR.width - noBRect.width)) + 1;
        const j = Math.floor(Math.random() * (divR.height - noBRect.height)) + 1;

        noB.style.left = i + 'px';
        noB.style.top = j + 'px';
    });
});
