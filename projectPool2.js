let imgs = document.querySelectorAll('.img');
let imgNr = imgs.length;
let imgOnTop = imgs[imgNr-1];
let img2ndOnTop = imgs[imgNr-2];

if (imgOnTop.load && img2OnTop.load){
    console.log(imgNr);
}



/*
check if at least 2 imgs are loaded
if yes, fade it out in 5s - this will show the one underneath

for fadeOut use animation
*/
