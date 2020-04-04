const slider = document.querySelector("#slider");
const canvas = document.querySelector("#canvas");
const numberImgs = 36;
const context = canvas.getContext('2d');

//detectando cambios de valor en el slider
slider.addEventListener('input', handleInputSlider);

const images = [];
window.addEventListener('load', pageLoaded);

function pageLoaded() {
    for (let i = 1; i <= numberImgs; i++) {
        const number = i.toString().padStart(2, '00');
        const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&q=90&updated_at=1574449122&w=1000`;
        const image = new Image();
        image.src = url;
        image.addEventListener('load', () => {
            images[i] = image;
            if (i == 1) {
                loadImage(i);
            }
        });
    }
}

function loadImage(index) {
    context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider() {
    console.log(this.value);
    loadImage(this.value);
}