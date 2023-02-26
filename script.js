const cunterDisplay = document.querySelector("h3")
let cunter = 0


const bubbleMarker = () => {
    const bubble = document.createElement("span")
    bubble.classList.add("bubble")
    document.body.appendChild(bubble)

    const size = Math.random() * (200 + 100) + "px"
    bubble.style.width = size
    bubble.style.height = size

    bubble.style.top = Math.random() * (100 + 50) + "%"
    bubble.style.left = Math.random() * (100) + "%"

    const plusMinus = Math.random() >0.5 ? 1 : -1
    bubble.style.setProperty('--left', Math.random() * 100 +
        plusMinus + "%")

    bubble.onclick = () => {
        cunter++
        bubble.remove()
        cunterDisplay.textContent = cunter
    }
    setTimeout(() => {
        bubble.remove()
    }, 8000)
}

setInterval(bubbleMarker, 200)



