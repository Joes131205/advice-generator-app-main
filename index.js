const updateAdviceButton = document.getElementById("btn-updateAdvice");
const adviceEl = document.getElementById("advice");
const adviceIdEl = document.getElementById("adviceId");

async function generateAdvice() {
    updateAdviceButton.classList.add("disabled");

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    adviceEl.textContent = `"${data.slip.advice}"`;
    adviceIdEl.textContent = `Advice #${data.slip.id}`;

    updateAdviceButton.classList.remove("disabled");
}

generateAdvice();

updateAdviceButton.addEventListener("click", generateAdvice);
