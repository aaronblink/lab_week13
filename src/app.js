const oneTwo = document.querySelectorAll(".original-container div")

oneTwo.forEach(div => {
    div.addEventListener("click", () => {
        const paste = document.querySelector('.copy-container')
        paste.insertAdjacentHTML("afterbegin", div.outerHTML)
    });
})




