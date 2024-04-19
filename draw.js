const canvas = document.querySelector('.canvas')
const stroke = document.querySelector('.stroke')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const erase = document.querySelector('.erase')
const LineWidth=document.querySelector('.input')
const ctx = canvas.getContext('2d')
let painting = false
canvas.height = window.innerHeight-180
canvas.width = window.innerWidth-180
canvas.addEventListener('mousedown', start)
canvas.addEventListener('mouseup', finish)
canvas.addEventListener('mousemove', draw)
function start() {
    painting = true
    ctx.beginPath()
}
function finish() {
    painting = false
}
function draw(e) {
    if (!painting) {
        return;
    }
    ctx.lineWidth = parseInt(LineWidth.value)
    ctx.lineCap = 'round'
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()


}
LineWidth.addEventListener('range',()=>
{
    ctx.LineWidth=parseInt(LineWidth.value)
})
stroke.addEventListener('change', () => {
    ctx.strokeStyle = stroke.value
})
red.addEventListener('click', () => {
    ctx.strokeStyle = "red"
})
blue.addEventListener('click', () => {
    ctx.strokeStyle = "blue"
})
green.addEventListener('click', () => {
    ctx.strokeStyle = "green"
})

erase.addEventListener('click', () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


