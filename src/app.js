const oneTwo = document.querySelectorAll(".original-container div")

oneTwo.forEach(div => {
    div.addEventListener("click", () => {
        const paste = document.querySelector('.copy-container')
        paste.insertAdjacentHTML("afterbegin", div.outerHTML)
    });
})

const remove = document.querySelector('.copies button')
const pasteArea = document.querySelector('.copy-container')
remove.addEventListener('click', () => {
    while (pasteArea.lastChild) {
        pasteArea.removeChild(pasteArea.lastChild);}
    });


