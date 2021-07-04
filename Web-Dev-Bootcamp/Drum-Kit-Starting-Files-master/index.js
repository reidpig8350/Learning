var drum1 = new Audio(src = "sounds/tom-1.mp3");
var drum2 = new Audio(src = "sounds/tom-2.mp3");
var drum3 = new Audio(src = "sounds/tom-3.mp3");
var drum4 = new Audio(src = "sounds/tom-4.mp3");
var crash = new Audio(src = "sounds/crash.mp3");
var kickBass = new Audio(src = "sounds/kick-bass.mp3");
var snare = new Audio(src = "sounds/snare.mp3");


//instrument clicked
document.querySelectorAll(".drum").forEach(function (e) {
    e.addEventListener("click", function (el) {
        var userClick = e.innerText.trim();
        playMusic(userClick);
    })
})

//instrument pressed
document.addEventListener("keydown", function (e) {
    var userPress = e.key;
    playMusic(userPress)
})


function playMusic(inputKey) {

    try {
        document.querySelector(`.${inputKey}`).classList.add("pressed")
    } catch (exception) { }

    switch (inputKey) {
        case ("w"):
            drum1.play()
            break;
        case ("a"):
            drum2.play()
            break;
        case ("s"):
            drum3.play()
            break;
        case ("d"):
            drum4.play()
            break;
        case ("j"):
            crash.play()
            break;
        case ("k"):
            kickBass.play()
            break;
        case ("l"):
            snare.play()
            break;
        default:
            console.log("pressed: ", inputKey)
            break;
    }

    setTimeout(function () {
        document.querySelectorAll(".drum").forEach(function (e) {
            e.classList.remove("pressed")
        })
    }, 200)

}

