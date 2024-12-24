let hh = 0;
let mm = 0;
let ss = 0;

setInterval(updateSec, 1000);

function updateSec(){
    ss += 1;
    if((ss % 60) === 0){
        ss %= 60;
        updateMin();
    }

    console.log(`${hh}:${mm}:${ss}`);
}
function updateMin(){
    mm += 1;
    if((mm%60) === 0){
        mm %= 60;
        updateHr()
    }
}
function updateHr(){
    hh += 1;
    hh %= 12;
}