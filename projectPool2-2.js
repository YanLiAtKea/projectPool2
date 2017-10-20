let imgs = document.querySelectorAll('.img');
let imgNr = imgs.length;
let index =  imgNr-1;
let startB = document.querySelector('.start');
let stopB = document.querySelector('.stop');
let runF = setInterval(run, 3000);

window.addEventListener('load', function(){
    run(); // so no need to wait 3s for the RUN to run
    runF;
})

stopB.addEventListener('click', stopLoop);
function stopLoop(){
    clearInterval(runF);
    stopB.style.display = "none";
    startB.style.display = "inherit";
}
startB.addEventListener('click', restart);
function restart(){
    startB.style.display = "none";
    stopB.style.display = "inherit";
    run();
    runF = setInterval(run, 3000); // have to write this way, so that the second time user click on stop ( ie stop- start- stop ) JS still knows which interval to concel.
}


function run(){
    imgs[index].classList.add('fadeOut');
    if (index >= 1){
        index--;
    } else {
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
