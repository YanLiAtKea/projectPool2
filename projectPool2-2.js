let imgs = document.querySelectorAll('.img');
let imgNr = imgs.length;
let index =  imgNr-1;

window.addEventListener('load', function(){
    setInterval(run, 3000);
})


function run(){
    imgs[index].classList.add('fadeOut');
    index--;
    if(index==-1){
        imgs[0].addEventListener('animationend', startOver);
            function startOver(){
                imgs.forEach(removeFadeOut);
                function removeFadeOut(img, order){
                    img.classList.remove('fadeOut');
            }
            index=imgNr-1;
        }
    }
}
