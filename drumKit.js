const music = function(s){
    s.currentTime = 0;
    s.play();
}

window.onkeydown = function (a) {

    const main = document.querySelector(`div[data-key='${a.key}']`)
    const tune = document.querySelector(`audio[data-key='${a.key}']`)

    main.classList.add("active");

    music(tune);
}

window.onkeyup = function (f){

    const main = document.querySelector(`div[data-key='${f.key}']`)

    main.classList.remove("active");

}

