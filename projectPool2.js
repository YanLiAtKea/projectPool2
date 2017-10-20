let imgs = document.querySelectorAll('img');
let imgNr = imgs.length;
let n = imgNr;
let imgSwitchI;
oneLoop();
setInterval(oneLoop, 35000);
function oneLoop(){
    imgSwitchI = setInterval(imgSwitch, 5000);
    function imgSwitch(){
        if (n >= 1) {
            n--;
            imgs[n].classList.add('fadeOut');
        } else { //first Img
            imgs[n].classList.add('fadeOut');
            imgs[imgNr-1].classList.remove('fadeOut');
            imgs.forEach(comeBack);
            function comeBack(individualImg, index){
                if (index != 0){
                    individualImg.classList.remove('fadeOut');
                    console.log('all cleared');
                }
            }
            n = imgNr;
            clearInterval(imgSwitchI);
        }
    }
}
