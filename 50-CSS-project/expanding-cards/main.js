var panels = document.querySelectorAll(".panel")

panels.forEach(function (panel) {
    panel.addEventListener("click", function (event) {

        if (event.currentTarget.classList.value.match("active")) {
            event.currentTarget.classList.remove("active")
        } else {
            panelDeactive()
            event.currentTarget.classList.add("active")
        }
    })
})

var panelDeactive = function () {
    document.querySelectorAll(".panel.active").forEach(function (panelActive) {
        panelActive.classList.remove("active")
    })
}

document.querySelectorAll(".panel").forEach(function (panel) {
    console.log(panel.getAttribute("style"))
})

