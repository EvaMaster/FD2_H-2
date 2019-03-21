let LogoContainer = document.querySelector(".LogoContainer");


function generateColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }
function generateBackgroundColor(){
    LogoContainer.style.backgroundColor = generateColor();
}

setInterval(generateBackgroundColor, 8000);
LogoContainer.addEventListener("mouseover", ()=>{
    generateBackgroundColor();
});