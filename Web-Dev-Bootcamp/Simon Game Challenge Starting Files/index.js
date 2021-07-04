var simonList = []
function simonListAppend() {
    $(".row div").click(function (e) {
        var oneForth = Math.floor(Math.random() * 4)
        simonList.push(oneForth)
        console.log(simonList)
    })
}

function sleep(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}

function flashCard(btn) {
    btn.addClass("pressed")
    btn.removeClass("pressed")
}

simonList = [1, 2, 3, 1]

function flash() {

    for (i = 0; i < simonList.length; i++) {
        press = simonList[i]
        switch (press) {
            case 0:
                flashCard($(".btn.green"))
                break;
            case 1:
                flashCard($(".btn.red"))
                break;
            case 2:
                flashCard($(".btn.yellow"))
                break;
            case 3:
                flashCard($(".btn.blue"))
                break;
        }
    }
}
flash()
