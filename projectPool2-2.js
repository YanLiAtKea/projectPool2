let imgs = document.querySelectorAll('.img');
let imgNr = imgs.length;
let index =  imgNr-1;

window.addEventListener('load', function(){
    setInterval(run, 1000);
})


function run(){
    imgs[index].classList.add('fadeOut');
    index--;
    if(index==-1){
        imgs.forEach(removeFadeOut);
            function removeFadeOut(img, order){

                    img.classList.remove('fadeOut');

            }
        index=imgNr-1
    }
}
/*
window.onload = function startSwitch(){
    imgs[index].classList.add('fadeOut');
    imgs[index].addEventListener('animationend', fadeOutNextOne);
    function fadeOutNextOne(){
        if (index >=1){
            index--;
            imgs[index].classList.add('fadeOut');
            imgs[index].addEventListener('animationend', startSwitch());

        } else {
            console.log(index)
            imgs.forEach(removeFadeOut);
            function removeFadeOut(img, order){

                    img.classList.remove('fadeOut');

            }
            index=imgNr-1;
            imgs[index].classList.add('fadeOut');

        }
    }
}*/