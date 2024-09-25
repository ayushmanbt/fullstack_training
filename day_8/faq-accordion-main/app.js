const buttons = Array.from(document.getElementsByClassName("accordion_button"))

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("here")
        const buttonStatus = button.getAttribute("status");
        buttonStatus == "hide" ? 
            button.setAttribute("status", "show")
            :
            button.setAttribute("status", "hide")
     })
})