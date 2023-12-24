const btn = document.getElementById("btn")
const yes = document.getElementById("yes")
const img = document.getElementById("img")
const parent = document.getElementById("parent")
btn.style.transition = "300ms"

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute"
    let { left, top, bottom, right } = parent.getBoundingClientRect()
    let height = window.innerHeight
    let width = window.innerWidth
    let rect = btn.getBoundingClientRect()
    btn.style.left = (getRandom(0, width - rect.width)) + "px"
    btn.style.top = (getRandom(0, height - rect.height)) + "px"
})

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

if (isMobile()) {
    setInterval(() => {
        btn.style.position = "absolute"
        setInterval(() => {
            let height = window.innerHeight
            let width = window.innerWidth
            let rect = btn.getBoundingClientRect()
            btn.style.left = (getRandom(0, width - rect.width)) + "px"
            btn.style.top = (getRandom(0, height - rect.height)) + "px"
        }, 100);
    }, 5000)
} else {
    console.log("Desktop device detected");
}

/**
 * use the below lines instead of line no. and to bound the curser inside the parent box 
 *  btn.style.left = (getRandom(left, right - rect.width)) + "px"
 *  btn.style.top = (getRandom(top, bottom - rect.height)) + "px"
 */